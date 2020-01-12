import React, {Fragment} from 'react';

import './Lesson.css';

const Columns = () => {
    return (
        <Fragment>
            <td style={{ color: 'red', textTransform: 'uppercase'}}>Inline style</td>
            <td className="title">Css</td>
        </Fragment>
    );
}


export const Table = () => {
    return (
        <table>
            <tbody>
                <tr>
                    <Columns />
                </tr>
            </tbody>
        </table>
    );
}