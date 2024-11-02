
import bannerImg from '../../assets/books.jpg'
const Banner = () => {
    return (
        <div>
            
            <div className="hero bg-base-200 min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img className=''
      src={bannerImg} />
    <div>
      <h1 className="text-4xl font-bold">Books to freshen up your bookshelf</h1>
     
      <button className=" bg-[#23BE0A] rounded p-2 px-3">View the List</button>
    </div>
  </div>
</div>



        </div>
    );
};

export default Banner;