import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Form, Field } from 'react-final-form';
import styles from './styles';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import clsx from 'clsx';
import FormControlLabel from '@material-ui/core/FormControlLabel';

let error = null;

const onSubmit = values => {
	// let { name, description } = values;
};

const validate = values => {
	let { name, description } = values;
	if (name === '' || description === '') {
		error = 'Must provide name and description';
	}
};

class ShareItemForm extends Component {
	constructor (classes) {
		// console.log(classes);
		super(classes);
		this.state = {
			checkedB : false
		};
		this.classes = classes.classes;
		this.tags = classes.tags;
		this.onSubmit = onSubmit;
		this.validate = validate;
	}

	render () {
		console.log(this.classes);
		console.log(this.tags);
		return (
			<Form
				onSubmit={onSubmit}
				validate={validate}
				render={({ handleSubmit }) => (
					<form className={this.classes.shareFormContainer} onSubmit={handleSubmit}>
						<h1 className={this.classes.formTitle}>Share. Borrow. Prosper.</h1>
						<div className={this.classes.formContainer}>
							<Field
								name="Name your item"
								render={({ input, meta }) => (
									<TextField
										id="standard-with-placeholder"
										label="Name your item"
										placeholder=""
										className={this.classes.textField}
										margin="normal"
									/>
								)}
							/>
							<Field
								name="Name your item"
								render={({ input, meta }) => (
									<TextField
										id="standard-with-placeholder"
										label="Describe your item"
										placeholder=""
										className={this.classes.textField}
										margin="normal"
									/>
								)}
							/>
							<div>
								<p>Add Tags:</p>

								<div>
									{this.tags.map(tag => {
										// let title = tag.title;
										// console.log(title);
										return (
											// <p>{title}</p>

											// <Checkbox
											// 	key={tag.id}
											// 	className={this.classes.root}
											// 	disableRipple
											// 	color="default"
											// 	checkedIcon={<span className={clsx(this.classes.icon, this.classes.checkedIcon)} />}
											// 	icon={<span className={this.classes.icon} />}
											// 	text={title}
											// />
											<FormControlLabel
												control={
													<Checkbox
														key={tag.id}
														checked={this.state.checkedB}
														onChange={''}
														value="checkedB"
														color="primary"
													/>
												}
												label={tag.title}
											/>
										);
									})}
								</div>
							</div>
							<Button variant="contained" color="secondary" disabled className={this.classes.button}>
								SHARE
							</Button>
						</div>
						{error ? error : ''}
					</form>
				)}
			/>
		);
	}
}

export default withStyles(styles)(ShareItemForm);
