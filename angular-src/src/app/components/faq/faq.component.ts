import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

	titleOne = 'what services are available to support me ? ';
	
	boxOne = 'The FJCs provide many criminal justice, civil legal, and social services in one location to victims/survivors of domestic violence, trafficking and elder abuse. Services include safety planning and risk assessment, counseling for victims and their children, civil legal assistance on immigration and family court matters, meeting with a prosecutor, accessing shelter, applying for housing and financial assistance, filing police reports, language interpretation, and a wide-range of self-sufficiency services including English for Speakers of Other Languages (ESOL) classes, financial literacy and counseling, computer skills classes, and many other services.';

	titleTwo = 'why do victims stay with an abuser or return after they have left?';

	boxTwo = 'There are numerous reasons why victims maintain contact with abusers or feel they cannot leave an abusive relationship. Victims of abuse often love or care about the people who harm them. Keeping the family together may be very important to the victim for many reasons, including for the sake of children or religious and cultural beliefs. Some victims fear that they will be seriously hurt or killed if they leave their abusers. Others do not have the financial resources and/or housing they need to leave. Medical conditions and disabilities may make living on their own difficult or impossible or the abusive individual may need the victims care.';

	titleThree = 'can men experience domestic violence?';

	boxThree = 'While it is recognised and documented in research and statistics that the majority of domestic violence is perpetrated by men against women, it is also acknowledged and becoming increasingly recognised that men can experience violence from their female partners and in male gay relationships. It can be extremely difficult for men to acknowledge they are experiencing domestic violence and the stigma and shame attached to the issue can be a huge barrier in accessing support.';

	boxThree_2 = 'Everyone has a basic human right to live a life free from violence and abuse. Women’s Aid can provide helpline support to men who experience domestic violence and can also sign post to other agencies that can help. For many men, calling the helpline is the first step they have made in talking to someone else about the problems they face, whether it is information or emotional support.';

	titleFour = 'are there available resources for abusers if they want to change? can they change?';

	boxFour = 'Changing one’s beliefs and behaviors is possible but it’s not quick or easy to do. Unless abusers take full responsibility for their behaviors, they are unlikely to change.';

  constructor() { }

  ngOnInit() {
  }

}
