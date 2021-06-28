import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";


const BlogDetails = () => {
    const { id } =useParams();
    const {data: blog ,load,error} = useFetch('http://localhost:8000/blogs/' + id  );
    const history=useHistory();
    

    const handleClick=()=>{
        fetch('http://localhost:8000/blogs/'+ blog.id,{
            method: 'DELETE'
         }).then(()=>{
            history.push('/');
        })
    }
    const handleBack=()=>{
        history.go(-1);
    }

    return (
        <div className="blog-details">
            {load && <h2>Loading...</h2> }
            {error && <h2>{error}</h2> }
            { blog && (
                <article>
                    <h1>{blog.title}</h1>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>Delete</button>
                    <button onClick={handleBack} style={{marginLeft:'20px'}}>Back</button>
                </article>
            )
            }


        </div>
    );
}

export default BlogDetails;