import { useState,useEffect } from "react";

const SearchResults =()=>{
   // const {Courses,dispatch} =useSearchContext()
    const [Courses,setCourses]=useState(null)
    const [seachQuery,setseachQuery]=useState(null)
    const [error,seterror] =useState(null)
    useEffect(()=>{
        const fetchUser= async() =>{
            const response= await fetch('/searchCourse/'+seachQuery)
            const json = await response.json()
            
            if(response.ok){
                //dispatch({type:'SET_RESULTS',payload:json})
                seterror(null)
                setCourses(json)
                seachQuery(null)
                
                }

            if(!response.ok){
                   // dispatch({type:'SET_RESULTS',payload:json})
                   setCourses(null)
                    seterror(json.error)
                }
                if(!seachQuery){
                    seterror(null)
                    setCourses(null)
                }
            
            }
            
        fetchUser()
        
    },[seachQuery])
    return (
        <div className="seachResults">
            
            <div class="col-lg-6">
            <div class="input-group">
                <input type="text" 
                class="form-control" 
                placeholder="Search for..." 
                onChange={(e)=>{
                    setseachQuery(e.target.value)
                    if(e.target.value===''){
                        seterror(null)
                        setCourses(null)
                    }}
                    } 
                value={seachQuery} />
                  
             </div>
            </div>

            <div className="read">
            {error && <div className="error">{error}</div>} 
            {Courses && Courses.map((course)=>{
                return(
                   
                    <a href={"/course/"+course._id}>{course.Title}</a>
                )
                 
            })
    
            }
               
                
               
            </div>

        </div>

        
    )

}
export default SearchResults