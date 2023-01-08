import './singlePost.css'

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
      
      
    <h1 className="singlePostTitle">Lorem ipsum dolor sit amet.
    <div className="singlePostEdit">
    <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
    <i className="singlePostIcon fa-solid fa-trash-can"></i>
    </div>
    </h1>
    <div className="singlePostInfo">
      <span className="singlePostAuthor">
        Author: <b>Narayan</b>
      </span>
      <span className="singlePostDate">1 hour ago</span>
    </div>
    <p className="singlePostDec">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro nihil, culpa veniam est optio, commodi sed voluptatem quidem voluptatibus, soluta sapiente amet obcaecati cumque sit! Voluptatum ea explicabo aut voluptates.lorem30
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptate earum consectetur quo, minus eos quae non, quos, odio natus laborum nihil animi? Corporis molestiae itaque esse voluptates perspiciatis temporibus?orem ipsum dolor, sit amet consectetur adipisicing elit. Porro nihil, culpa veniam est optio, commodi sed voluptatem quidem voluptatibus, soluta sapiente amet obcaecati cumque sit! Voluptatum ea explicabo aut voluptates.lorem30
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptate earum consectetur quo, minus eos quae non, quos, odio natus laborum nihil animi? Corporis molestiae itaque esse voluptates perspiciatis temporibus?
    </p>
    </div>
    </div>
  )
}

export default SinglePost
