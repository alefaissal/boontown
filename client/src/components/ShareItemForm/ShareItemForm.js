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
	let { name, description } = values;
	console.log({ name, description });
};

const validate = values => {
	let { name, description } = values;
	if (name === '' || description === '') {
		error = 'Must provide name and description';
	}
};

class ShareItemForm extends Component {
	constructor (classes) {
		super(classes);
		this.state = {
			checkedTags : [],
			tags        : []
		};
		this.classes = classes.classes;
		this.tags = classes.tags;
		this.onSubmit = onSubmit;
		this.validate = validate;
	}

	render () {
		const handleChange = name => event => {
			this.setState({ ...this.state, [name]: event.target.checked });
		};
		const checkedTags = tags => {
			let list = [];
			tags.forEach(tag => {
				list.push({ id: tag.id, value: false });
			});
			return list;
		};

		const list = checkedTags(this.tags);

		//TODO undesrtand why it get into an infinite loop
		// this.setState({
		// 	checkedTags : list
		// });

		console.log(checkedTags(this.tags));

		return (
			<Form
				onSubmit={onSubmit}
				validate={validate}
				render={({ handleSubmit }) => (
					<form className={this.classes.shareFormContainer} onSubmit={handleSubmit}>
						<h1 className={this.classes.formTitle}>Share. Borrow. Prosper.</h1>
						<div className={this.classes.formContainer}>
							<Field
								name="name"
								render={({ input, meta }) => (
									<TextField
										id="standard-with-placeholder"
										label="Name your item"
										placeholder=""
										className={this.classes.textField}
										margin="normal"
										{...input}
										value={input.value}
									/>
								)}
							/>
							<Field
								name="description"
								render={({ input, meta }) => (
									<TextField
										id="standard-with-placeholder"
										label="Describe your item"
										placeholder=""
										className={this.classes.textField}
										margin="normal"
										{...input}
										value={input.value}
									/>
								)}
							/>
							<div>
								<p>Add Tags:</p>

								<div>
									{this.tags.map(tag => {
										return (
											<React.Fragment>
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
											</React.Fragment>
										);
									})}
								</div>
							</div>
							<Button type="submit" variant="contained" color="secondary" className={this.classes.button}>
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
