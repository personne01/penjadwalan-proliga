import Layout from '../component/Layout'
import Style from '../styles/Blog.module.css'

interface Post {
    id: number;
    title: string;
    body: string;
}

interface BlogProps {
    dataBlog:Post[]
}

export default function Blog(props: BlogProps){
    const {dataBlog} = props;
    return(
        <Layout pageTitle="Blog">
            <h1>Halaman Blog</h1>
            {dataBlog.map((blog) => (
            <div key={blog.id} className={Style.cardstyle}>
                <h1>{blog.title}</h1>
                <p>{blog.body}</p>
            </div>
                
            ))}
            
        </Layout>
    )
}

export async function getServerSideProps() {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    const result = await fetch(url);
    const dataBlog = await result.json();
    return{
        props: {
            dataBlog,
        }
    }
}