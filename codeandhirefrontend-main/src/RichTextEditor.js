import React, { useRef } from 'react'
import JoditEditor from 'jodit-react';

const config = {
    buttons : ["bold", "italic", "link", "unlink", "underline", "source"],
    theme:"dark"

};

const RichTextEditor = ({getValue}) => {

    const editor = useRef(null);
  return (
    <div className='text-white'>
        <JoditEditor
			 ref={editor}
       
			//value={content}
			tabIndex={1} 
            config={config}
			//onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
			onChange={(newContent) => getValue(newContent)}
    
		/>
      
    </div>
  )
}

export default RichTextEditor
