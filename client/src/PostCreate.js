import React , { useState } from 'react'
import axios from 'axios'

export default () => {

    const [title , setTitle] = useState('')
    
    const onSubmit = async (event) => {
        event.preventDefault();
        await axios.post('http://localhost:4000/post', { title } )
        setTitle('')
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input className="form-control" 
                        value={title} 
                        onChange={ ({target: { value }}) => setTitle( value )} 
                    />
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </div>
    )
}