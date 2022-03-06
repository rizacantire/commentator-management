import React , {useEffect, useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { getCommentatorAsync,commentatorList, addCommentatorAsync } from '../../redux/reduce/commentatorSlice';
export default function Commentators() {
  const dispatch = useDispatch()
  const getData = useSelector(commentatorList)
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");

  const handleSubmit = async ()=>{
    //e.preventDefault()
    let com = {firstName: firstName,lastName:lastName}
    await dispatch(addCommentatorAsync(com))
    console.log(firstName,lastName);
  }

  useEffect(() => {
    dispatch(getCommentatorAsync())
    
   }, [dispatch])
  return (
    <div>
      spiker
   
      </div>
  )
}
