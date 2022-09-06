import React from 'react'
import { useState } from 'react';
import TextFieldGroup from '../../common/textFiledGroup';
import '../../css/main/support.css'

const Support = () => {

    const [searchArticle,setSearchArticle] = useState("");

    return (
        <div className='support'>
            <div className='support-height-250'>
                <h1 className='text-center text-color-white support-font-size-24 support-mt-71'>How can we help you?</h1>
                <div className='support-search-div'>
                    <div className="support-ml-35p">
                        <TextFieldGroup 
                            type="text"
                            name="uername"
                            placeholder="Your Email Address"
                            value={searchArticle}
                            label=""
                            onChange={e=> setSearchArticle(e.target.value)}
                            err={""}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Support;