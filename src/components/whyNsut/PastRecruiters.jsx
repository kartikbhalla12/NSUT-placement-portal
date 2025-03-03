import React from 'react';
import { Container } from 'react-bootstrap';

export default function PastRecruiters() {
	return (
		<div>
			<div
				className='banner past-recruiters'
				style={{ backgroundImage: `url("/why-nsut/recruitment.png")` }}>
				<h1>PAST RECRUITERS</h1>
			</div>
			<Container style={{ marginTop: '5vh' }}>
				<div class='recruiters' style={{ marginBottom: '7vh' }}>
					<center>
						<p>
							The batch profile consists of students from computer science and
							electronics background. Students at NSUT East Campus throughout
							their graduation and Post-Graduation indulge into various skill
							development programs, internships, training, and cultural as well
							as technical contests. Students have continued to receive
							placement & internship offers from various reputed companies from
							different sectors of the industry.
						</p>
						<img
							src='/why-nsut/past-recruiters.png'
							style={{ maxWidth: '100%' }}
						/>
					</center>
				</div>
			</Container>
		</div>
	);
}
