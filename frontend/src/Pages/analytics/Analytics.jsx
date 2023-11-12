import React from 'react';
import { Icon } from '@iconify/react';
import Styles from './analytics.module.css';
import LeftBar from "../../Components/leftBar/LeftBar";


function Analytics() {
  return (
    <>
        <LeftBar />
        <div className={Styles.wrapper}>
            <span>
                <h1>Quiz Analysis</h1>
            </span>
            <div className={Styles.wrapper2}>
                <table>
                   <tr className={Styles.deepBlue}>
                    <th>S.No</th>
                    <th>Quiz Name</th>
                    <th>Created On</th>
                    <th>Impression</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                   </tr>
                   <tr className={Styles.white}>
                    <td>1</td>
                    <td>Quiz 1</td>
                    <td>11 Nov,  2023</td>
                    <td>345</td>
                    <td><Icon className={Styles.edit} icon="bx:edit" /></td>
                    <td><Icon className={Styles.delete} icon="material-symbols:delete" /></td>
                    <td><Icon className={Styles.share} icon="ic:sharp-share" /></td>
                    <td><a href="">Question Wise Analysis</a></td>
                   </tr>
                   <tr className={Styles.blue}>
                    <td>2</td>
                    <td>Quiz 2</td>
                    <td>11 Nov, 2023</td>
                    <td>600</td>
                    <td><Icon className={Styles.edit} icon="bx:edit" /></td>
                    <td><Icon className={Styles.delete} icon="material-symbols:delete" /></td>
                    <td><Icon className={Styles.share} icon="ic:sharp-share" /></td>
                    <td><a href="">Question Wise Analysis</a></td>
                   </tr>
                </table>
            </div>
        </div>
    </>
  )
}

export default Analytics