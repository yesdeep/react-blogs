import { useState } from "react";
import { useHistory } from "react-router";
const Create = () => {
    const[title ,setTitle]= useState('');
    const[body,setBody]=useState('');
    const[author,setAuthor]=useState('');
    const[load,setLoad]=useState(false);
    const history = useHistory();


    const handleSubmit =(e)=>{
        setLoad(true);
        // e.preventDefault();
        const blog={title,body,author};
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{"Content-type":"application/json"},
            body: JSON.stringify(blog)
        })
        // .then(()=>{
        //     history.push('/');
        // });       
        .then(()=>
        {
            history.push('/');
            setLoad(false);
        })
    }


    return (
        <div className="create">
            <h2>Create a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text" required
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                />
                <label>Content:</label>
                <input
                    type="text" required
                    value={body}
                    onChange={(e)=>setBody(e.target.value)}
                />
                <label> Author:</label>
                <input
                    type="text" required
                    value={author}
                    onChange={(e)=>setAuthor(e.target.value)}
                />
                {load && <button>Adding Blog...</button>}
                {!load && <button>Add Blog</button>}
            </form>
        </div>
      );
}
 
export default Create;