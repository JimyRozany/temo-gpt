// "use client"
// import { useEffect, useRef } from 'react';

// const CKEditor = ({ value, onChange }) => {
//   const editorRef = useRef(null);

//   useEffect(() => {
//     if (typeof window !== 'undefined' && !window.CKEDITOR) {
//       const script = document.createElement('script');
//       script.src = 'https://cdn.ckeditor.com/4.16.0/standard/ckeditor.js';
//       script.onload = () => {
//         window.CKEDITOR.replace(editorRef.current);
//         window.CKEDITOR.instances.editor1.on('change', () => {
//           const data = window.CKEDITOR.instances.editor1.getData();
//           onChange(data);
//         });
//       };
//       document.body.appendChild(script);
//     } else if (window.CKEDITOR) {
//       window.CKEDITOR.replace(editorRef.current);
//       window.CKEDITOR.instances.editor1.on('change', () => {
//         const data = window.CKEDITOR.instances.editor1.getData();
//         onChange(data);
//       });
//     }
//   }, []);

//   return (
//     <textarea
//       ref={editorRef}
//       name="editor1"
//       defaultValue={value}
//     />
//   );
// };

// export default CKEditor;

//-------------------------------------------------------------

"use client";

import { useEffect, useRef } from 'react';

const CKEditor = ({ value = '', onChange  }) => {
  const editorRef = useRef(null);


  useEffect(() => {
    const initializeEditor = () => {
      if (typeof window !== 'undefined') {
        const editorId = editorRef.current?.id || 'editor1';


        // Destroy the existing editor instance if it exists
        if (window.CKEDITOR.instances[editorId]) {
          window.CKEDITOR.instances[editorId].destroy(true);
        }

        // Initialize the CKEditor instance
        const editorInstance = window.CKEDITOR.replace(editorRef.current);

        editorInstance.on('change', () => {
          const data = editorInstance.getData();
          onChange(data);
        });
      }
    };

    if (!window.CKEDITOR) {
      const script = document.createElement('script');
      script.src = 'https://cdn.ckeditor.com/4.16.0/standard/ckeditor.js'; // Use the latest secure version
      script.onload = initializeEditor;
      document.body.appendChild(script);
    } else {
      initializeEditor();
    }

  }, []);

  return (
    <textarea
      ref={editorRef}
      name="editor1"
      defaultValue={value}
    />
  );
};

export default CKEditor;



//-------------------------------------------------------------

// "use client"

// import { useEffect, useRef } from 'react';

// const CKEditor = ({ value, onChange }) => {
//   const editorRef = useRef(null);

//   useEffect(() => {
//     if (typeof window !== 'undefined' && !window.CKEDITOR) {
//       const script = document.createElement('script');
//       script.src = '/ckeditor/ckeditor.js';
//       script.onload = () => {
//         window.CKEDITOR.replace(editorRef.current);
//         window.CKEDITOR.instances.editor1.on('change', () => {
//           const data = window.CKEDITOR.instances.editor1.getData();
//           onChange(data);
//         });
//       };
//       document.body.appendChild(script);
//     } else if (window.CKEDITOR) {
//       window.CKEDITOR.replace(editorRef.current);
//       window.CKEDITOR.instances.editor1.on('change', () => {
//         const data = window.CKEDITOR.instances.editor1.getData();
//         onChange(data);
//       });
//     }
//   }, []);

//   return (
//     <textarea
//       ref={editorRef}
//       name="editor1"
//       defaultValue={value}
//     />
//   );
// };

// export default CKEditor;

// "use client";

// import { useEffect, useRef } from "react";
// // import ckeditor from "@/public/ckeditor/ckeditor" ;
// const CKEditor = ({ value = "", onChange }) => {
//   const editorRef = useRef(null);

//   useEffect(() => {
//     const loadEditor = () => {
//       if (typeof window !== "undefined" && !window.CKEDITOR) {
//         const script = document.createElement("script");
//         script.src = "'https://cdn.ckeditor.com/4.25.0/standard/ckeditor.js'"; // Path to the local CKEditor file
//         script.onload = () => {
//           const editorInstance = window.CKEDITOR.replace(

//             editorRef.current({
//               toolbar: [
//                 { name: "basicstyles", items: ["Bold", "Italic", "Underline"] },
//                 { name: "paragraph", items: ["NumberedList", "BulletedList"] },
//               ],
//               height: 300,
//             })

//           );

//           editorInstance.on("change", () => {
//             const data = editorInstance.getData();
//             onChange(data);
//           });
//         };
//         document.body.appendChild(script);
//       } else if (window.CKEDITOR) {
//         const editorInstance = window.CKEDITOR.replace(
//           editorRef.current,
//           {
//             toolbar: [
//               { name: "basicstyles", items: ["Bold", "Italic", "Underline"] },
//               { name: "paragraph", items: ["NumberedList", "BulletedList"] },
//             ],
//             height: 300,
//           },
//           editorInstance.on("change", () => {
//             const data = editorInstance.getData();
//             onChange(data);
//           })
//         );
//       }
//     };

//     loadEditor();
//   }, []);

//   return <textarea ref={editorRef} defaultValue={value}></textarea>;
// };

// export default CKEditor;

// // const editorInstance = window.CKEDITOR.replace(editorRef.current, {
// //     toolbar: [
// //       { name: 'basicstyles', items: ['Bold', 'Italic', 'Underline'] },
// //       { name: 'paragraph', items: ['NumberedList', 'BulletedList'] },
// //     ],
// //     height: 300,
// //   });
