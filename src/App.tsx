import React, { useState } from "react";
import "./App.css";

function App() {
	const [total, setTotal] = useState<number>(0);
	const [correct, setCorrect] = useState<number>(0);

	return (
		<div className="App">
			<button
				className="reset"
				onClick={() => {
					setTotal(0);
					setCorrect(0);
				}}
			>
				Reset
			</button>

			<p>
				<button
					className="inc"
					onClick={() => {
						setTotal(total + 1);
					}}
				>
					-
				</button>
				<button
					className="inc"
					onClick={() => {
						setCorrect(correct + 1);
						setTotal(total + 1);
					}}
				>
					+
				</button>
			</p>

			<p>
				<div>
					<b>
						{total > 0 ? Math.round((correct / total) * 100) : 0}%
					</b>
				</div>
			</p>

			<div>{correct} Correct</div>
			<div>{total} Trials</div>
		</div>
	);
}

export default App;
