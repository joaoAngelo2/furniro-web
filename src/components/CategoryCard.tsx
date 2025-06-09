import { Link } from "react-router-dom";

interface CategoryCardProps {
  imageClass: string;
  title: string;
  to: string;
}


const CategoryCard = ({imageClass, title,to}: CategoryCardProps) => (
        <Link to={to} className="flex-1">
                <div className='h-altura-browser w-80 md:w-72 text-center font-poppins mb-12 mx-auto'>
                <div className={`${imageClass} h-altura-browser w-full rounded-xl bg-cover`}></div>
                <p className="text-zinc-800 text-2xl font-semibold mt-5">{title}</p>
                </div>
        </Link>
);

export default CategoryCard;