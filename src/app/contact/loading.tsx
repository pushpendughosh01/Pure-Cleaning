export default function Loading() {
	// You can add any UI inside Loading, including a Skeleton.
	return (
		<div className="w-screen h-screen flex justify-center items-center">
			<div className="gearbox">
				<div className="overlay" />
				<div className="gear one">
					<div className="gear-inner">
						<div className="bar" />
						<div className="bar" />
						<div className="bar" />
					</div>
				</div>
				<div className="gear two">
					<div className="gear-inner">
						<div className="bar" />
						<div className="bar" />
						<div className="bar" />
					</div>
				</div>
				<div className="gear three">
					<div className="gear-inner">
						<div className="bar" />
						<div className="bar" />
						<div className="bar" />
					</div>
				</div>
				<div className="gear four large">
					<div className="gear-inner">
						<div className="bar" />
						<div className="bar" />
						<div className="bar" />
						<div className="bar" />
						<div className="bar" />
						<div className="bar" />
					</div>
				</div>
			</div>
		</div>
	);
}
