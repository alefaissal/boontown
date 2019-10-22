import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Form, Field, FormSpy } from 'react-final-form';
import styles from './styles';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import clsx from 'clsx';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { ItemPreviewContext } from '../../context/ItemPreviewProvider';

let error = null;

const validate = values => {
	let { name, description } = values;
	if (name === '' || description === '') {
		error = 'Must provide name and description';
	}
};

class ShareItemForm extends Component {
	constructor (props) {
		super(props);
		this.state = {
			checkedTags : [],
			tags        : []
		};
	}

	applyTags = (tags, allTags) => {
		return tags.map(tag => {
			const updatedTag = { title: tag };
			allTags.filter(t => {
				if (t.title === tag) {
					updatedTag.id = t.id;
				}
			});
			return updatedTag;
		});
	};

	dispatchUpdate = (values, allTags, updatePreview) => {
		updatePreview({
			...values,
			tags : this.applyTags(values.tags || [], allTags)
		});
	};

	render () {
		const { classes, tags } = this.props;

		return (
			<ItemPreviewContext.Consumer>
				{({ updatePreview, resetPreview }) => (
					<Form
						onSubmit={values => {}}
						validate={validate}
						render={({ handleSubmit }) => (
							<form className={classes.shareFormContainer} onSubmit={handleSubmit}>
								<FormSpy
									subscription={{ values: true }}
									onChange={({ values }) => {
										console.log(values.title);
										if (values) {
											this.dispatchUpdate(values, tags, updatePreview);
										}
										// if (values.title === '' && values.description.length < 2) {
										// 	resetPreview();
										// }
										return '';
									}}
								/>
								<h1 className={classes.formTitle}>Share. Borrow. Prosper.</h1>
								<div className={classes.formContainer}>
									<Field
										name="title"
										render={({ input, meta }) => (
											<TextField
												id="standard-with-placeholder"
												label="Name your item"
												placeholder=""
												className={classes.textField}
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
												className={classes.textField}
												margin="normal"
												{...input}
												value={input.value}
											/>
										)}
									/>
									<div>
										<p>Add Tags:</p>

										<div>
											{tags.map(tag => {
												return (
													<label className={classes.tagsList}>
														<Field name="tags" component="input" type="checkbox" value={tag.title} />
														<span className={classes.tagTitle}>{tag.title}</span>
													</label>
												);
											})}
										</div>
									</div>
									<Button type="submit" variant="contained" color="secondary" className={classes.button}>
										SHARE
									</Button>
								</div>
								{error ? error : ''}
							</form>
						)}
					/>
				)}
			</ItemPreviewContext.Consumer>
		);
	}
}

export default withStyles(styles)(ShareItemForm);
