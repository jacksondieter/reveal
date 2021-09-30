import {Request, Response} from 'express'
import {nanoid} from 'nanoid'
import {Secret, ISecret} from '../db/model'


export const apiController = async (req:Request, res:Response) => {
  res.send("api");
}
export const getSecret = async (req:Request, res:Response) => {
  try {
    const code = req.params.id
    if (!code) {
      throw new Error("Id needed");      
    }
    const doc = await Secret
      .findOne({ code })
      .lean()
      .exec()

    if (!doc) {
      return res.status(404).end()
    }
    res.status(200)
      .json({ data:doc.text})
      .on('finish',()=>removeSecret(doc as ISecret))
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}

export const createSecret = async (req:Request, res:Response) => {
  console.log(req.body)
  const code = nanoid()
  try {
    const doc = await Secret.create({ ...req.body, code,times:1})
    res.status(201).json({ data: code })
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}

async function removeSecret(doc:ISecret){
  if(doc.times === 1){
    try {
      const removed = await Secret.findOneAndRemove({
        code: doc.code
      })

      if (!removed) {
        console.error('not found')
      }else{
        console.log(`Secret removed ${removed.code}`)
      }  
    } catch (e) {
      console.error(e)
    }
  }else{
    try {
      const updatedDoc = await Secret
        .findOneAndUpdate(
          {
            code: doc.code
          },
          { times: doc.times-1 }
        )
        .lean()
        .exec()
  
      if (!updatedDoc) {
        console.error('not found')
      }
  
      console.log(`Secret updated ${updatedDoc.code} remaind times:${updatedDoc.times}`)
    } catch (e) {
      console.error(e)
    }
  }
  
}