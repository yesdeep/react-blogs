import BlogList from './BlogList';
import useFetch from './useFetch';


const Home =()=>{
    
    const {data: blogs ,load,error}= useFetch('http://localhost:8000/blogs');


    return (
        <div className="home">
            {error && <h1>{error}</h1>}
            {load && <h1>Loading...</h1>}
            {blogs &&<BlogList blogs={blogs} head= {"All Blogs!"} />}

        </div>
    );
}
 
export default Home;