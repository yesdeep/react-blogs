import {Link} from 'react-router-dom';
const  BlogList= (props) => {
    const blogs=props.blogs;
    const head= props.head;
    // const handleDelete=props.handleDelete;
    

    return (
        <div className="blog-list">
            <h2>{head}</h2>
            {blogs.map((x)=>(
                <div className="blog-preview" key={x.id}>
                    <Link to ={`/blogs/${x.id} `}>
                        <h2>{x.title}</h2>
                        <p >Written by {x.author}</p>
                    </Link>
                    {/* <button onClick={() => handleDelete(x.id)} style={{ marginLeft:"10px", marginTop:"15px", marginBottom:"-20px" }} >Delete Blog</button> */}
                </div>
            ))} 
        </div>
    );
}
 
export default BlogList;