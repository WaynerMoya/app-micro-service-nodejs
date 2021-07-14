import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default ({ comments }) => {

    const renderedComments = Object.values(comments).map(comment => {
        return (
            <li key={comment.id}> {comment.content}</li>
        )
    });

    return (
        <ul>
            {renderedComments}
        </ul>
    )
}