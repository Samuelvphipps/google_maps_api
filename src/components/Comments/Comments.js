import './Comments.css'


function Comments () {

    let comments = [
        {
            id: 1,
            content: 'Hellow how are you doing mr man',
            created: 2022-11-12,
            user: 'Jonathan',
            parent_comment_id:null,
        },
        {
            id: 2,
            content: 'Meowington meow meow',
            created: 2022-11-12,
            user: 'Marcus',
            parent_comment_id:null,
        },
        {
            id: 3,
            content: 'Time to party baby',
            created: 2022-11-12,
            user: 'Maria',
            parent_comment_id:null,
        },
        {
            id: 4,
            content: 'I am doing quite well!',
            created: 2022-11-12,
            user: 'Jahova',
            parent_comment_id: 1,
        },
        {
            id: 5,
            content: 'I am so great!',
            created: 2022-11-12,
            user: 'Jeremiah',
            parent_comment_id: 1,
        },
        {
            id: 6,
            content: 'I annot wait to party with you!',
            created: 2022-11-12,
            user: 'Jamie',
            parent_comment_id: 3,
        },
    ];


    return(
        <>
        {comments.map((comment)=>{
            let subcomments = []
            comments.map((subcomment)=>{
                if (subcomment.parent_comment_id===comment.id){
                    
                    subcomments.push(<div className="subcomment"> {subcomment.id}, {subcomment.content}, {subcomment.created}</div>)
                    
                }
            })
            if(comment.parent_comment_id === null){
            return(
                <>
                <h3> {comment.id}, {comment.content}, {comment.created} </h3>
                    {subcomments.length>0 ?  <>{subcomments[0]} {subcomments[1]}</>: <></>}
                </>
            )}
        })}
        </>
    )
}



export default Comments;