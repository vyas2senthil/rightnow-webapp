
// Selectors
const links   = document.querySelectorAll('.dropdown-item'),
	  home    = document.querySelectorAll('.home'),
	  display = document.getElementById('display'),
	  main    = document.getElementById('info'),
	  title   = document.getElementById('title');
	  
// HTML
const html 	= {
	overview: `<h3 id="instructions">Instructions: Overview</h3>
			   <h5><strong>The RightNow User Interface Consist of 5 Sections:</strong></h5>
			   <ol>
			       <li class="subtitles"><strong>The Control Menu</strong>
					   <p>The control menu offers a series of commands and is specific to the current environment.
					   Typical commands include, create new, save, edit.</p>
				   </li>
				   <li class="subtitles"><strong>Display Pane</strong>
					   <p>The Display Pane will show any items that has been accessed, newly created items and 
					   items that’s been searched for. Any information within your items can be viewed or edited 
					   on the display pane.</p>
				   </li>
				   <li class="subtitles"><strong>Recent Items</strong>
					   <p>Recent items will display a list of the last 10 items actioned such as ticket, chat, 
					   implementations, answers and contact records</p>
				   </li>
				   <li class="subtitles"><strong>Quick Search</strong>
					   <p>The Quick Search menu offers different search capabilities dependent upon the drop-down 
					   selection. Users can search for tickets, opportunities, answers and contacts. The Results 
					   will be seen on the Display Pane.</p>
				   </li>
				   <li class="subtitles"><strong>Navigation</strong>
					   <p>The Navigation view offers a series capabilities. Each icon contains a series of reports 
					   and views.  Results will be seen on the Display Pane.</p>
				   </li>
			   </ol>`,

	  ticket: `<h3 id='instructions'>Instructions: Creating a Ticket</h3>
	  		   <p><strong>Note:</strong> Tickets are also referred as incidents or references. For this tutorial, we will utilize tickets.</p>
	  		   <h5><strong>Let's Get Started:</strong></h5>
	  		   <ol>
	  			   <li class="sub-items">Click File</li>
	  			   <li class="sub-items">Select Reference</li>
	  			   <ul>
	  				   <li class="sub-items">The top section displays reportable fields, text and drop downs fields. 
	  				   The bottom portion is where details such as private notes, and responses are added. Each ticket 
	  				   has a series of associated tabs that can contain data specific to the ticket and contact.</li>
	  				   <li class="sub-items">All fields in red are required to be filled out before you can save and 
	  				   create a ticket.</li>
	  				   <li class="sub-items">First, add a Subject. The subject text is client facing and should utilize 
	  				   positive language terminology and is intended to reinforce the solution discussed during the interaction.</li>
	  				   <li class="sub-items">Next, whether a ticket is new, in progress, completed, or closed, ensure that 
	  				   a status is selected appropriately for the ticket. To see chart for an explanation of specific status 
	  				   requirements, <a href="https://ilearn.intralinks.com/right-now/RightNow-Documenting-Client-Requests-v5.pdf" target="_blank">click here.</a></li>
	  				   <li class="sub-items">New tickets are assigned to the creator by default. To change the assigned user:</li>
	  				   <ol>
	  					   <li><strong>Click the drop down</strong></li>
	  					   <li><strong>Select a user</strong></li>
	  				   </ol>
	  				   <li class="sub-items">A product must be assigned to the ticket:</li>
	  				   <ol>
	  					   <li><strong>Click the dropdown</strong></li>
	  					   <li><strong>Select the associated product related to the issue</strong></li>
	  				   </ol>
	  				   <li class="sub-items">Next a category and sub-category must be selected</li> 
	  				   <ul>
	  					   <li><strong>Select how to’s for general inquiries and instructions.</strong></li> 
	  					   <li><strong>Select requests for instances the Intralinks performs an action for the client.</strong></li> 
	  					   <li><strong>Select technical Issues for instances where the Intralinks application is not functioning as designed.</strong></li>
	  				   </ul>
	  				   <li class="sub-items">The Vertical field allows for the Line of Business to be identified.</li>
	  				   <li class="sub-items">The contact field should contain the name and email address of the user seeking assistance. 
	  				   To add a contact:</li>
	  				   <ol>
	  					   <li><strong>Click on the search icon.</strong></li>
	  					   <li><strong>Enter the search criteria including partials and click search.</strong></li>
	  				   </ol>
	  				   <li class="sub-items">If the user does not appear in the search results, a new contact can be created by clicking “New Contact”.</li>
	  				   <li class="sub-items">Utilize the queue field to designate the appropriate support team to respond to the inquiry. If the inquiry is resolved by the ticket creator, the creator must assign their team in the queue.</li>
	  				   <li class="sub-items">Typically, severity must be assigned by the support team depending on the urgency of the issue. For more information on the severity levels <a href="https://ilearn.intralinks.com/right-now/assets/Severity-Levels.png">click here.</a></li>
	  				   <li class="sub-items">Additionally, each ticket should have an exchange associated with it. To add an exchange:</li>
	  					   ol>
	  					   <li><strong>From the Search Exchange tab, click “add new”.</strong></li>  
	  					   <li><strong>From the Workspace ID field, click search.</strong></li>  
	  					   <li><strong>Under name, enter a full or partial exchange name, or a complete External workspace ID and click search.</strong></li>  
	  					   <li><strong>Locate the exchange from the search results and click select.</strong></li>
	  				   </ol>
	  				   <li class="sub-items">Any escalations that were done for tickets that could not be resolved by the support team, can be found in the details tab. Enter in the JIRA (Pronoucned “Jee-ra”) ticket ID, Incident Report ID or click the corresponding links if you’re already logged into JIRA (Pronoucned “Jee-ra”).  For more requirements on how to escalate to Technical Support, <a href="#">click here.</a></li>
	  			   </ul>
	  		   </ol>`,

	  opportunity: `<h3 id='instructions'>Instructions: Creating an Implementation</h3>
	  				<h5><strong>Let's Get Started:</strong></h5>
					<ol>
						<li class="sub-items">Click File</li>
						<li class="sub-items">Select Opportunity</li>
						<li class="sub-items">Next select the workspace type.</li>
						<ul>
							<li class="sub-items">The implementation record will open. The control menu displays all the commands associated with the record. The center will contain text fields, and drop down fields.Next you will see a series of tabs where additional account information is documented.</li>
							<li class="sub-items"><strong>Note:</strong> All fields noted in red are required fields.</li>
							<ul>
								<li><strong>First, enter a project name with the appropriate naming convention.</strong></li>
								<li><strong>Next, select a status. If this record is an error, please use Error-Delete.</strong></li>
								<li><strong>For workspace type, the field should not be updated.</strong></li>
								<li><strong>The CS Owner field designates the client service manager for the implementation. The CSM is the primary point of contact responsible for this record.</strong></li>
								<li><strong>From the Region drop down, select the geographic location of the account.</strong></li>
								<li><strong>The language field allows the CSM to denote the primary language used to support the client.</strong></li>
								<li><strong>Enter the organization.</strong></li>
								<li><strong>Enter the BCN or Deal ID associated with the implementation using the provisioning notice.</strong></li>
								<li><strong>For deal stage, select the appropriate status of the current project. Selecting stage 4, Training, or stage 5, Delivery, will trigger a unique customer satisfaction survey.</strong></li>
								<li><strong>Select the level of service and support according to their contract.</strong></li>
								<li><strong>Under Assist Offering, select if the client has a contract for this offering.</strong></li>
								<li><strong>For Service review, select how often the contract will be reviewed for service.</strong></li>
								<li><strong>In the summary field, the description of the project and any notes pertaining to the account will be entered here.</strong></li>
								<li><strong>Next, in the 10 Point Email text field, copy and paste the information from the Market to Cash email here.</strong></li>
							</ul>
							<li class="sub-items">Next we will discuss the associated tabs.</li>
							<ul>
								<li><strong>The tasks tab will display a list of key milestones in the life cycle of the customer engagement. For detailed information on how to complete a task <a href="#">click here.</a></strong></li>
								<li><strong>Next is client contacts.  This tab is used to associate one or more clients whom will be the primary points of contact. At least one contact must be added.</strong></li>
								<li><strong>Workspace search allows CSMs to manage the account by associating one or more workspaces to the record.</strong></li>
								<li><strong>The tickets tab allows the CSM to view or create tickets associated with the workspaces added to the record.</strong></li>
								<li><strong>Next for logistics information, physical or electronic data related to the implementation can be seen or edited here.</strong></li>
								<li><strong>For Notes, additional information or internal notes can be seen or edited here.</strong></li>
								<li><strong>In the attachment tab, files can be uploaded or added to the current implementation.</strong></li>
								<li><strong>The audit log displays the opportunities history.</strong></li>
							</ul>
							<li class="sub-items">Once all the required fields and necessary information has been entered, click save.</li>
						</ul>
					</ol>`,

	  closing: `<h3 id='instructions'>Instructions: Closing a Ticket</h3>
	  			<h5><strong>Let's Get Started:</strong></h5>
				<ul>
					<li>Prior to closing a ticket, complete all of the required fields highlighted in red. Please see the Creating A Ticket tutorial for specific instructions. </li>
					<ol>
						<li class="sub-items">First, enter a private note from the “Add” drop down.  Private notes are used to summarize the interaction between Intralinks and the client.  Private notes include instructions provided, error messages and next steps. These notes are not client facing.</li>
						<li class="sub-items">Click on the messages tab, and enter the note in the text field.</li>
						<li class="sub-items">To respond to a client, from the “Add” drop down, select “Response”.  Responses can be entered free form, by utilizing standard texts, or via our Knowledge Base and Smart Assistant.
						<br/>
						<br/>
						For more information on Responding to a Ticket, <a href="">click here.</a>
						<br/>
						<br/>
						</li>
						<li class="sub-items">Next, The Status field shows the current state of the ticket. Click the status drop down and Select Closed.</li>
						<li class="sub-items">The resolution field show how the interaction was concluded and is required when closing a ticket. Click the resolutions drop down and select the appropriate resolution.
						<br/>
						<br/>
						<strong>Note:</strong> If the status field is set to pending client response. The resolution field becomes a required field before the ticket may be saved.
						<br/>
						<br/>
						</li>
						<li class="sub-items">Lastly, click save, or save and close.</li>
					</ol>
				</ul>`,

	  responding: `<h3 id='instructions'>Instructions: Responding to a Ticket</h3>
	  			   <h5><strong>Let's Get Started</strong></h5>
				   <ol>
					   <li class="sub-items">To send a response, select the messages tab.</li>
					   <li class="sub-items">Next, click add and select response.</li>
					   <ul>
						   <li class="line-items"><strong>There are 4 available options to respond.</strong></li>
						   <ol>
							   <li class="sub-items">The smart assistant, searches for knowledge answers that matches content entered in the ticket subject line.</li>
							   <li class="sub-items">The Search knowledgebase option allows users to search our entire public and private knowledge base using key words and/or phrases.  Users may also isolate the answer search to a specific Intralinks product.</li>
							   <ul>
								   <li class="sub-items">After clicking search, you will be presented with results. Before selecting a response to send, click the View link to preview the answer. If accurate, you can either select to add the answer as a link, or as text. 
								   <br/>
								   <br/>
								   <strong>Note:</strong> Adding as Text allows you to edit the content before sending.</li>
								   <br/>
							   </ul>	
							   <li class="sub-items">The Standard Text option presents a series of pre-written responses to common inquiries.</li>
							   <ul>
								   <li class="sub-items">Find the folder with the correct topic, and select the response. To do a direct search, click find in list and enter a keyword.</li>
							   </ul>
							   <li class="sub-items">You may also enter your own free form text as a response.   When sending a free form response, we recommended to begin by using the “TEMPLATE” standard text as this provides the required formatting.</li>
						   </ol>
					   </ul>
					   <li class="sub-items">Once the response is ready to be sent, click the checkbox send on save.</li>
					   <li class="sub-items">The CC field is now available if more contacts need to be added.</li>
					   <li class="sub-items">Next, click save or save and close to send the response.</li>
				   </ol>`,

	  contact: `<h3 id='instructions'>Instructions: Contact Records</h3>
	  			<h5><strong>Let's Get Started:</strong></h5>
				<ol>
					<li class="sub-items">To view a contact record, under Quick Search, select “Contact Quick Search 3”.</li>
					<li class="sub-items">Next, enter the first name, or last name, email address, or Contact ID.
						<br/>
						<br/>
						<strong>Note:</strong> All fields, except Contact ID may utilize partial searches.
						<br/>
						<br/>
					</li>
					<li class="sub-items">The record of the contact will display two sections. The user account information will appear at the top. Below will display a series of tabs with information regarding the users’ interaction with Intralinks.</li>
					<li class="sub-items"><strong>Let’s start with the text and dropdown fields.</strong></li>
					<ul>
						<li class="sub-items">Most of the text fields and drop down fields that are based upon the RightNow profile may be modified. Grayed out fields cannot be edited. All fields in red are required fields.</li>
						<li class="sub-items">The ES Name Contact field is used by our Enterprise Support Team to indicate which contacts are paid “named contacts” for the Enterprise Support Service.</li>
						<li class="sub-items">Through our customer portal, users are able to opt in, or opt out of our scheduled and unscheduled maintenance lists. These fields may also be updated by an Intralinks Admin via request through the RightNow application.</li>
						<li class="sub-items">Contact ID is a unique identifier and is visible to clients in the customer portal.  The contact ID field may also be used by an Intralinks Admin for quick access to a user’s security questions for verification. Click “Verify Account.”</li>
						<li class="sub-items">Disabled Flag, alerts Intralinks staff of the client’s ability to engage our support team.  Yes, indicates that the user is able to access our customer portal and contact Intralinks Support.  No, indicates that support service is unavailable to the user.</li>
						<li class="sub-items">Each mailer sent from the RightNow system offers users the ability to opt out of future mailings. The status can be determined by the Opt-in and Out field.</li>
					</ul>	
					<li class="sub-items"><strong>Next are the tabs associated with the contact record.</strong></li>
					<ul>
						<li class="sub-items">Tickets will display the contacts history of engagement with our support team.
							<br/>
							<br/>
							From this view, Intralinks Admins may access, review and edit tickets, as well as export a ticket list by clicking Options, Export, selecting the output type and create a new ticket by clicking Add New. 
						</li>
						<li class="sub-items">Implementations will show where the client is listed as the primary contact.</li>
						<li class="sub-items">The Tasks tab will display all of the Implementation tasks associated with the contact.</li>
						<li class="sub-items">Surveys will display all responses by the contact. Intralinks Admin’s may click the View Results link to see the contact’s survey answers and comments.</li>
						<li class="sub-items">Marketing activity will show all emails sent to the contact from Right Now. These emails include the scheduled and unscheduled system notifications, product update emails and surveys. Intralinks Admins may see the content of the email by clicking on the document hyperlink.</li>
						<li class="sub-items">Attachments will display all internal files uploaded and attached to the associated contact record.</li>
						<li class="sub-items">Audit Log displays the history of the contact, including edits to the contact record.</li>
					</ul>
				</ol>`,

	  search: `<h3 id='instructions'>Instructions: Quick Search</h3>
	  		   <h5><strong>Let's Get Started:</strong></h5>
			   <ol>
				   <li class="sub-items">Click the drop down under Quick Search.</li>
				   <ul>
					   <li class="sub-items"><strong>A list of different search options are available to choose from.</strong></li>
					   <ol>
						   <li class="sub-items">To search for a ticket, select “Incident search” from the drop down menu and enter the ticket number.</li>
						   <li class="sub-items">To search for tickets associated to a specific exchange or workspace, Select, Tickets – Search Workspace, and enter a workspace name or ID.</li>
						   <li class="sub-items">Workspaces are added to tickets manually.  The search results will only produce tickets where workspaces were added.</li>
						   <li class="sub-items">Select Encrypted Password Search, and enter either the workspace name, or workspace ID to locate and retrieve the encrypted archive password ticket.
							   <br/>
							   <br/>
							   <strong>Note:</strong> Local copies are encrypted and require a unique password to access content.
						   </li>
						   <li class="sub-items">If an implementation search is required, select “Opportunity Search” and enter the name of the implementation.</li>
						   <li class="sub-items">If the implementation name is unknown, select Implementation Search by Workspace ID, enter either the Workspace ID, BCN number, or Exchange ID.
						   </li>
					   </ol>
				   </ul>
			   </ol>`,

	   main:   `<h3>Welcome to RightNow Training!</h3>
        		<h4>Skills you'll learn in this training</h4>
				<div class="d-flex bd-highlight">
  					<div class="p-2 flex-md-fill bd-highlight">
  						<img class="main-icon" src="images/navigate.png"/>
  						<h4>Navigate</h4>
  						<p> In this training you will be able to learn the basics on how to navigate the user interface, and use the different types of features on the Right Now UI</p>
  					</div>
  					<div class="p-2 flex-md-fill bd-highlight">
  						<img class="main-icon" src="images/ticket.svg"/>
  						<h4>Tickets</h4>
  						<p>In this training you will also learn the basics on how to create tickets, close tickets, respond to tickets, & create implementations from start to finish</p>
  					</div>
  					<div class="p-2 flex-md-fill bd-highlight">
  						<img class="main-icon" src="images/search.png"/>
  						<h4>Search</h4>
  						<p>In this training you'll learn how to utilize the basic search options, and learn to utilize the most used search features everyday.</p>
  					</div>
				  </div>
			    </div>`
}
// Test

window.addEventListener('popstate', function(event) {
   



    //     history.pushState(null, null, window.location.pathname);
    // }
    // iframe.contentWindow.history.back();
    // alert('back button pressed');

    // history.pushState(null, null, window.history.back());
    // location.reload(true);

}, false);


// Actions
window.onload = function() {
	findingLinks(links);
	returnHome(home);
}


function returnHome(arr) {
	arr.forEach(function(val, i){
		arr[i].addEventListener('click', function(){
			display.removeAttribute('src');
			main.innerHTML = html.main;
			title.innerText = 'Training';
			console.log(this.hash);
		}, false);
	});
}

function findingLinks(arr) {
	arr.forEach(function(val, i){
			arr[i].addEventListener('click', function(){
				history.replaceState(null, null, arr[i].href);
			display.setAttribute('src', `assets/${arr[i].id}/index.html`);
			main.innerHTML = html[arr[i].id];
			title.innerText = `${arr[i].text} Tutorial`;
		}, false);
	});
}



