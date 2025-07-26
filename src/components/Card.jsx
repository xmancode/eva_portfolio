
import{motion} from 'motion/react'
function Card({style,text,image,containerRef}) {
  return image && !text ? (
  <motion.img img className="absolute w-15 cursor-grab"
      src={image}
      style={style}
      whileHover={{scale: 1.15}}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
      />
    ):(
    <motion.div className="absolute px-1 py-4 text-xl text-center
     rounded-full ring ring-gray-700 font-extralight
      bg-storm w-[12rem] cursor-grab"
      style={style}
      whileHover={{scale:1.1}}
      drag
      dragConstraints={containerRef}
      dragElastic={1}//for rebound
      >
      {text}
    </motion.div>
  )
}

export default Card;
