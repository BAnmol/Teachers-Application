import React from 'react'

function NoticeSection(props) {
  return (
    <div>
        <div>
        <div>
          <h3>Notice Board</h3>
        </div>
        <div>
          {
            props?.noticeData ? props?.noticeData?.map((ele)=>{
              return(
                <>
                  <div>
                    <h5>{ele.title}</h5>
                    <p>{ele.content}</p>
                    <p>{`Date : ${ele.date}`}</p>
                  </div>
                </>
              )
           })
           :
           "No data to display....."  
          }
        </div>
      </div>
    </div>
  )
}

export default NoticeSection