import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange , onButtonSubmit }) => {
	return (
		<div className='f3'>
			<p>
				{'This Magic Brain can detects your brain on your photos'}
			</p>
			<div className='center'>
				<div className=' form center pa4 br3 shadow-5'>
					<input className='pa4 w-70 pa2 center' type='text' 
						placeholder='enter your image url'
						onChange={onInputChange} 
					/>
					<button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
						onClick={onButtonSubmit}
						>Detect
					</button>
				</div>
			</div>
		</div>
	)
}

export default ImageLinkForm;