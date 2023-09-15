import { useEffect } from "react";
import { useState } from "react";


const courses = () => {
    const [courses , setCourses] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default courses;