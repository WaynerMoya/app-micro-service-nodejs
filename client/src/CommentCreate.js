import React, { useState } from 'react'
import axios from 'axios'

export default ({ postId }) => {

    const [content, setContent] = useState('')
    const onSubmit = async ( event ) => {
        event.preventDefault();
        await axios.post('http://localhost:4001/post/'+ postId +"/comments" , { content })
        setContent('')
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>New Comment</label>
                    <input
                        className="form-control"
                        value={content}
                        onChange={({ target: { value } }) => setContent(value)}
                    />
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </div>
    )
}