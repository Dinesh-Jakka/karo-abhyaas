import './index.css'

const VideoCard = (props) => {
  const { videoDetails } = props;
  const { thumbnailUrl, title, description } = videoDetails;

 return (
     <li className="video-card">
       <img alt='thumbnail' src={thumbnailUrl} className="video-thumbnail" />
       <div className="video-card-text-content">
         <p>{title}</p>
         <p>{description}</p>
         <div className="practice-btn-container">
           <button className="practice-btn">Practice</button>
         </div>
       </div>
     </li>
   
 );
};

export default VideoCard;
