import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

function Card(props) {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;
  function handleClick(){
    if(likedCourses.includes(course.id)){
      setLikedCourses ((prev) => prev.filter((cid) => (cid !== course.id)));
      toast.warning("like removed !");
    }else{
      if(likedCourses.length === 0){
          setLikedCourses([course.id]);
      }else{
        setLikedCourses((prev)=>[...prev, course.id]); 
      }
      toast.success("Liked Successfully !");
    }
  }
  return (
    <div className="w-[300px] bg-bgDark rounded-md overflow-hidden bg-opacity-80">
      <div className="relative">
        <img src={course.image.url} alt="" />
        <button className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-10px] grid place-items-center">
          <div  onClick={handleClick} >
            {
              likedCourses.includes(course.id) ? (<FcLike fontSize="1.75rem"/>) : ( <FcLikePlaceholder fontSize="1.75rem"/>)
            }
          </div>
        </button>
      </div>
      <div></div>
      <div key={course.id}>
        <p className="text-white font-semibold text-lg leading-6">
          {course.title}
        </p>
        <p className="mt-2 text-white">
          {
            course.description.length > 100 ? (`${course.description.substr(0, 100)} . . .`) : (course.description)
          }
        </p>
      </div>
    </div>
  );
}

export default Card;
