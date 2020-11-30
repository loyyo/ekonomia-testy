import React, { useState } from 'react';
import testy from './testy.json';

const QuestionList = () => {
	const [search, setSearch] = useState('');
	const updateSearch = (e) => {
		setSearch(e.target.value.toLowerCase().substr(0, 100));
	};
	let filteredQuestions = testy.questions.filter((e) => {
		return e.question.toLowerCase().indexOf(search) !== -1;
	});
	return (
		<>
			<div className='searchBar'>
				<div className='pytanie'>Wpisz pytanie:</div>
				<input className='search' type='text' value={search} onChange={updateSearch} />
			</div>
			<div className='questionList'>
				{filteredQuestions.map((e) => {
					return (
						<div className='qa'>
							<div className='question'>{e.question}</div>
							<div className='answers'>
								{e.answers.map((answer) => {
									return <div className='answer'>{answer.a}</div>;
								})}
							</div>
							<div className='correct'>
								Poprawna odpowiedź to: <strong>{e.correct.toUpperCase()}</strong>
							</div>
						</div>
					);
				})}
				{testy.rynek.map((el) => {
					return (
						<>
							{el.question.toLowerCase().indexOf(search) !== -1 && (
								<div className='questionList'>
									<div className='qa'>
										<div className='question'>{el.question}</div>
										<div className='answers'>
											{el.answers.map((e) => {
												return (
													<div className='answer'>
														{e.a}
														<strong>{e.b}</strong>
													</div>
												);
											})}
										</div>
									</div>
								</div>
							)}
						</>
					);
				})}
			</div>
		</>
	);
};

export default QuestionList;
