import { RxDragHandleDots2 } from "react-icons/rx";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Fragment, useState } from "react";
import { useGlobalContext } from "../../../context/context";

const AcoumtLink = () => {
  const {
    handleOnDragEnd,
    personLinks,
    setPersonLinks,
    name,
  } = useGlobalContext()

  const [showLink,setShowLink] = useState(true)

  const handleToggleLink = () => {
    setShowLink(!showLink);
  };

  const handleRemoveLink = (index) => {
    const updatedLinks = personLinks.filter((_, i) => i !== index);
    setPersonLinks(updatedLinks);
  };

  return (
    <Fragment>
      <div className="p-4">
        <h1 className="text-yellow-500 text-3xl font-semibold ">
          Account Link
        </h1>
        <hr className="mt-4" />
      </div>

      <div className="max-w-2xl mx-auto p-4 md:p-8">
       {showLink &&(
         <DragDropContext onDragEnd={handleOnDragEnd} key={name}>
         <Droppable droppableId="droppable">
           {(provided) => (
             <div ref={provided.innerRef} {...provided.droppableProps}>
               {personLinks?.map(({ icon, label, singleLink }, index) => (
                 <Draggable
                   key={index}
                   draggableId={`draggable-${index}`}
                   index={index}
                 >
                   {(provided) => (
                     <div
                       ref={provided.innerRef}
                       {...provided.draggableProps}
                       {...provided.dragHandleProps}
                       className="mb-6"
                     >
                       <div className="rounded-full shadow-md flex max-w-md justify-between flex-wrap md:flex-row items-center p-4 mx-auto">
                         <div className="flex items-center gap-2">
                           <div>
                             <RxDragHandleDots2 />
                           </div>
                           <div className="bg-black text-white p-2 rounded-full">
                             {icon}
                           </div>
                           <div>
                             <p className="font-medium">{label}</p>
                           </div>
                         </div>
                         <div className="flex md:flex-row items-center gap-2 mt-4 md:mt-0">
                           <button
                             className="px-4 py-1 border-black border-[1px] rounded-full w-full md:w-auto"
                             onClick={() => handleRemoveLink(index)}
                           >
                             Remove
                           </button>
                           <a
                             target="_"
                             href={singleLink}
                             className="bg-yellow-500 rounded-full text-white font-semibold px-4 py-2 w-full md:w-auto text-[12px]"
                           >
                             Open Link
                           </a>
                         </div>
                       </div>
                     </div>
                   )}
                 </Draggable>
               ))}
               {provided.placeholder} {/* Placeholder for spacing */}
             </div>
           )}
         </Droppable>
       </DragDropContext>
       )}

        <div className="bg-white shadow-lg flex justify-center p-5 rounded-full">
          <button
            className="flex font-medium"
            onClick={handleToggleLink}
          >
            <div>+ Add Links</div>
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default AcoumtLink;
