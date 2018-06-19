
// Global Selectors 
const links   		 = document.querySelectorAll('.link'),
	  dropdownHeader = document.querySelectorAll('.dropdown-header'),
	  display 		 = document.querySelector('.iframe'),
	  tutorials		 = document.querySelector('.tutorials'),
	  dropdownMenu 	 = document.querySelector('.dropdown-menu'),
	  main    		 = document.getElementById('info'),
	  title   		 = document.getElementById('title');


// HTML

const html = {
    main: "<h3>Welcome to RightNow Training!</h3><h4>What You Will Learn in RightNow Training.</h4><div class='d-flex bd-highlight'><div class='p-2 flex-md-fill bd-highlight'><img class='main-icon' src='images/navigate.png'/><h4>Navigate</h4><p>An overview of the control menu, display pane, recent items, quick search and navigation on the RightNow user interface.</p></div><div class='p-2 flex-md-fill bd-highlight'><img class='main-icon' src='images/ticket.svg'/><h4>Tickets</h4><p>The general process on how to create a ticket, respond to a ticket and closing a ticket.</p></div><div class='p-2 flex-md-fill bd-highlight'><img class='main-icon' src='images/implementation.png'/><h4>Implementation</h4><p>The basics on how to create new implementations for new contracts.</p></div><div class='p-2 flex-md-fill bd-highlight'><img class='main-icon' src='images/search.png'/><h4>Search</h4><p>How to use different search options with quick search, and an indepth look at contact records.</p></div</div>",

    overview: "<h3 id='instructions'>Instructions: Overview</h3><h5><strong>The RightNow User Interface Consist of 5 Sections:</strong></h5><ol><li class='subtitles'><h6><strong>The Control Menu</strong></h6><p>The control menu offers a series of commands and is specific to the current environment. Typical commands include, create new, save, edit.</p></li><li class='subtitles'><h6><strong>Display Pane</strong></h6><p>The Display Pane will show any items that has been accessed, newly created items and items that’s been searched for. Any information within your items can be viewed or edited on the display pane.</p></li><li class='subtitles'><h6><strong>Recent Items</strong></h6><p>Recent items will display a list of the last 10 items actioned such as ticket, chat, implementations, answers and contact records</p></li><li class='subtitles'><h6><strong>Quick Search</strong></h6><p>The Quick Search menu offers different search capabilities dependent upon the drop-down selection. Users can search for tickets, opportunities, answers and contacts. The Results will be seen on the Display Pane.</p></li><li class='subtitles'><h6><strong>Navigation</strong></h6><p>The Navigation view offers a series capabilities. Each icon contains a series of reports and views.  Results will be seen on the Display Pane.</p></li></ol>",

    ticket: "<h3 id='instructions'>Instructions: Creating a Ticket</h3><h6 class='subtitles'><strong>Note:</strong> Tickets are also referred as incidents or references. For this tutorial, we will utilize tickets.</h6><ol><li class='line-items'>Click File.</li><li class='line-items'>Select Reference</li><ul><li class='sub-items'>The top section displays reportable fields, text and drop downs fields. The bottom portion is where details such as private notes, and responses are added. Each ticket has a series of associated tabs that can contain data specific to the ticket and contact.</li><ul><li class='sub-items'>Fields and tabs are visible based upon RightNow Profiles.</li></ul><li class='sub-items'>All fields in red are required to be filled out before you can save and create a ticket.</li><ul><li class='sub-items'>For data quality purposes, the following additional fields are required for processing:</li><ul><li class='sub-items'>Queue</li><li class='sub-items'>Vertical</li><li class='sub-items'>Exchange - using Search Exchange.</li></ul></ul></ul><li class='line-items'>Add a Subject. The subject text is client facing and should utilize <i>positive phrasing.</i></li><ul><li class='sub-items'>Subject lines should answer:</li><ul><li class='sub-items'>Why should I read this?</li><li class='sub-items'>How is this relevant</li><li class='sub-items'>What is the purpose</li></ul><li class='sub-items'>Summarize Content:</li><ul><li class='sub-items'>Descriptive</li><li class='sub-items'>Specific</li><li class='sub-items'>Accurate</li></ul><li class='sub-items'>Be free of grammatical errors, internal jargon and abbreviations.</li><li class='sub-items'>Should always have the audience in mind.</li></ul><li class='line-items'>Ticket Status: allows users to denote the progress of a ticket.To see chart for an explanation of specific status requirements, <a href='http://tswiki/index.php/TS_Ticket_Handling_Process#Ticket_statuses' target='_blank'>click here.</a><br/><br/><span class='sub-items'><strong>Note:</strong> Some ticket status trigger automation.</span><br/></li>   <ul><li class='sub-items'>New tickets are assigned to the creator by default. To change the assigned user</li><ul><li class='sub-items'>Click the drop down.</li><li class='sub-items'>Select a user</li></ul></ul><li class='line-items'>Product/Category Designations: To add a product:</li><ul><li class='sub-items'>Click the dropdown</li><li class='sub-items'>Select the associated product related to the issue</li><li class='sub-items'>To add a category and sub-category:</li><ul><li class='sub-items'>Click the dropdown</li><li class='sub-items'>Select the associated category related to the product</li><li class='sub-items'>Next select a sub-category</li></ul><li>Note:</li><ul><li class='sub-items'>Select how to’s for general inquiries and instructions.</li><li class='sub-items'>Select requests for instances the Intralinks performs an action for the client.</li><li class='sub-items'>Select technical Issues for instances where the Intralinks application is not functioning as designed.</li></ul></ul><li class='line-items'>Vertical: allows for the Line of Business to be identified.</li><li class='line-items'>The contact field should contain the name and email address of the user seeking assistance. <ul><li class='sub-items'>To add a contact:</li><ul><li class='sub-items'>Click on the search icon.</li><li class='sub-items'>Enter the search criteria including partials and click search.</li></ul><li class='sub-items'>If the user does not appear in the search results, a new contact can be created by clicking “New Contact”.</li></ul><li class='line-items'>Queue allows you to designate the appropriate support team to respond to the inquiry. If the inquiry is resolved by the ticket creator, the creator must assign their team in the queue.</li><li class='line-items'>Severity: Allows for us to assign an urgency to the ticket.  For more information on the severity levels <a href='http://tswiki/index.php/TS_Ticket_Handling_Process#Escalation_Severity_Levels' target='_blank'>click here.</a></li><li class='line-items'>Search Exchange Tab: each ticket should have an exchange associated with it. To add an exchange:</li><ul><li class='sub-items'>From the Search Exchage tab, click Add New</li><li class='sub-items'>From the Workspace ID field, Click Search</li><li class='sub-items'>Under Name, enter a full or partial exchange name, or complete External Workspace ID and click Search</li><li class='sub-items'>Locate the exchange from the search results and click Search</li><br/><span class='sub-items'><strong>Note:</strong> if the exchange does not exist, or can not be located, a new exchange record can be created on the fly. <a href='https://via.intralinks.com/index.html#workspaceDetail/2143177/8165446458/8573633458' target='_blank'>Click here</a> for instructions.</span><br/><br/></ul><li class='line-items'>Any escalations that were done for tickets that could not be resolved by the support team, can be found in the details tab. Enter in the JIRA (Pronoucned “Jee-ra”) ticket ID, Incident Report ID or click the corresponding links if you’re already logged into JIRA (Pronoucned “Jee-ra”). For more requirements on how to escalate to Technical Support, <a href='http://tswiki/index.php/TS_Ticket_Handling_Process#Escalation_Severity_Levels' target='_blank'>click here.</a></li></ol>",

    closing:"<h3 id='instructions'>Instructions: Closing a Ticket</h3><h6 class='subtitles'><strong>Note:</strong> Prior to closing a ticket, all of the required fields highlighted in red must be completed. Please see the Creating A Ticket tutorial for specific instructions.</h6><br/><span class='sub-items'>For specific information on creating a ticket, <a href='#ticket'>click here</a></span><br/><br/><ol><li class='line-items'>First, enter a private note from the Add drop down. Private notes are used to summarize the interaction between Intralinks and the client. Private notes include instructions provided, error messages and next steps. These notes are not client facing.</li><li class='line-items'>Click on the messages tab, and enter the note in the text field.</li><li class='line-items'>To respond to a client, from the Add drop down, select Response. Responses can be entered free form, by utilizing standard texts, or via our Knowledge Base and Smart Assistant.<br/><br/><span class='sub-items'>For more information on Responding to a Ticket, <a href='#responding'>click here.</a></span><br/><br/></li><li class='line-items'>Next, The Status field shows the current state of the ticket. Click the status drop down and Select Closed.</li><li class='line-items'>The resolution field show how the interaction was concluded and is required when closing a ticket. Click the resolutions drop down and select the appropriate resolution.<br/><br/><span class='sub-items'><strong>Note:</strong> If the status field is set to pending client response. The resolution field becomes a required field before the ticket may be saved.</span><br/><br/></li><li class='line-items'>Lastly, click Save, or Save and Close.</li></ol>",
    
    responding: "<h3 id='instructions'>Instructions: Responding to a Ticket</h3><ol><li class='line-items'>To send a response, select the Messages tab.</li><li class='line-items'>Next, click add and select Response.<br/><br/><span class='sub-items'><strong>There are 4 available options to respond:</strong></span><br/><br/><ul><li class='sub-items'>The <strong>smart assistant</strong>, searches for knowledge answers that matches content entered in the ticket subject line.</li><li class='sub-items'>The <strong>Search knowledgebase</strong> option allows users to search our entire public and private knowledge base using key words and/or phrases. Users may also isolate the answer search to a specific Intralinks product.</li><ul><li class='sub-items'>After clicking search, you will be presented with results. Before selecting a response to send, click the View link to preview the answer. If accurate, you can either select to add the answer as a link, or as text.<br/><br/><span class='sub-items'><strong>Note:</strong> Adding as Text allows you to edit the content before sending.</span><br/><br/></li></ul><li class='sub-items'>The <strong>Standard Text</strong> option presents a series of pre-written responses to common inquiries.</li><ul><li class='sub-items'>Find the folder with the correct topic, and select the response. To do a direct search, click <i><u>find in list</i></u> and enter a keyword.</li></ul><li class='sub-items'>You may also enter your own <strong>Free Form Text</strong> as a response. When sending a free form response, we recommended to begin by using the TEMPLATE standard text as this provides the required formatting.</li></ul></li><li class='line-items'>Once the response is ready to be sent, click the checkbox send on save.</li><li class='line-items'>The CC field is now available if more contacts need to be added.</li><li class='line-items'>Next, click save or save and close to send the response.</li></ol>",

    opportunity: "<h3 id='instructions'>Instructions: Creating an Implementation</h3><ol><li class='line-items'>Click File</li><li class='line-items'>Select Opportunity</li><li class='line-items'>Next, select Workspace Type.<br/><span class='sub-items'>The implementation record will open.</span><br/><ul><li class='sub-items'>The control menu displays all the commands associated with the record.</li><li class='sub-items'>The center will contain text fields, and drop down fields<br/><span class='sub-items'><strong>Note: </strong> All fields noted in red are required fields.</span><br/><ul><li class='sub-items'><strong>Project Name</strong> - enter a project name with the appropriate naming convention.</li><li class='sub-items'><strong>Status</strong> – provides insight into the progress of the implementation record. Note: If this record is an error, please use Error-Delete.</li><li class='sub-items'><strong>Workspace Type</strong> - This will display the workspace type selected when the implementation record was created. Do not update this field.</li><li class='sub-items'><strong>CS Owner</strong> - is the CSM who is the primary point of contact responsible for this record.</li><li class='sub-items'><strong>Region</strong> - select the geographic location of the account.</li><li class='sub-items'><strong>Imp. Language</strong> - allows the CSM to denote the primary language used to support the client.</li><li class='sub-items'><strong>Organization</strong> - Enter the organization as it appears on the MTC email.</li><li class='sub-items'><strong>BCN/Deal ID</strong> - Enter the BCN or Deal ID associated with the implementation using the provisioning notice.</li><li class='sub-items'><strong>Service Type</strong> - Select the level of service and support according to their contract.</li><li class='sub-items'><strong>Assist Offering</strong> - select if the client has a contract for this offering.</li><li class='sub-items'><strong>Service Review</strong> - select how often the contract will be reviewed for service.</li><li class='sub-items'><strong>Deal Stage</strong> – This field is primarily used to trigger client facing surveys. Selecting stage 4, Training, or stage 5, Delivery, will trigger a unique customer satisfaction survey.</li><li class='sub-items'><strong>Summary Field</strong> - Enter the description of the project and any notes pertaining to the account will be entered here</li><li class='sub-items'><strong>Point Email field</strong> - Copy and paste the information from the Market to Cash email here.</li></ul></li><li class='sub-items'>Next you will see a series of tabs where additional account information is documented.<ul><li class='sub-items'><strong>Tasks Tab</strong> - will display a list of key milestones in the life cycle of the customer engagement. For detailed information on how to complete a task <a href='https://via.intralinks.com/index.html#workspaceDetail/2143177/8165446458/8167294148' target='_blank'>click here.</a></li><li class='sub-items'><strong>Client contacts</strong> - This tab is used to associate one or more clients whom will be the primary points of contact. At least one contact must be added. This tab will also allow you to add contacts to receive Training and/or Go Live Surveys.  For steps on adding contacts, <a href='https://via'intralinks.com/index.html#workspaceDetail/2143177/8165446458/8167294148' target='_blank'>click here.</a></li><li class='sub-items'><strong>Workspace search</strong> - allows CSMs to manage the account by associating one or more workspaces to the record.</li><li class='sub-items'><strong>Tickets tab</strong> - displays all tickets associated to the exchanges added on the workspace search tab.</li><li class='sub-items'><strong>Logistics information</strong> - Details in regard to physical or electronic data related to the implementation can be seen or edited here.</li><li class='sub-items'><strong>Notes</strong> - allows for additional information or internal notes can be seen or edited here.</li><li class='sub-items'><strong>Attachments</strong> – Allows CSMs to post files shared with clients on this tab. This data is internal only.</li><li class='sub-items'><strong>Audit log</strong> - displays a time stamp record of all activities on the implementation record.</li></ul></li>   </ul></li><li class='line-items'>Once all the required fields and necessary information has been entered, click Save</li> </ol>",
    
    contact:  "<h3 id='instructions'>Instructions: Contact Records</h3><ol><li class='line-items'>To view a contact record, under Quick Search, select Contact Quick Search 3.</li><li class='line-items'>Next, enter the first name, or last name, email address, or Contact ID.<br/><br/><span class='sub-items'><strong>Note: </strong>All fields, except Contact ID may utilize partial searches.</span><br/><br/></li><li class='line-items'>The record of the contact will display two sections. The user account information will appear at the top. Below will display a series of tabs with information regarding the users interaction with Intralinks.<br/><br/><ol><li class='sub-items'><strong>User Account Information</strong></li><br/><span class='sub-items'><strong>Note: The ability to edit contact record data is based upon your RightNow Profile.</strong> Grayed out fields cannot be edited. Required fields are denoted in Red.</span><br/><ul><li class='sub-items'><strong>ES Name Contact</strong> - field is used by our Enterprise Support Team to indicate which contacts are paid “named contacts”.  These users have a devoted SAM, and are granted a special hotline into our support organization.</li><li class='sub-items'>Through our customer portal, users are able to opt in, or opt out of our <strong>Scheduled</strong> and <strong>Unscheduled</strong> Notification lists. These fields may be updated by our clients via logging into the customer portal. Intralinks Admins may also adjust these fields by written authorization from clients.<br/><span class='sub-items'><strong>Note: </strong>Each mailer sent from the RightNow system also offers users the ability to opt out of future mailings. The status can be determined by the <strong>Opt-in and Out field.</strong></span><br/></li><li class='sub-items'><strong>Contact ID</strong> - is a unique identifier and is visible to clients in the customer portal. The contact ID field may also be used by an Intralinks Admin for quick access to a user’s security questions for verification. Click “Verify Account.”</li><li class='sub-items'><strong>Disabled Flag</strong> - alerts Intralinks staff of the client’s ability to engage our support team. No, indicates that the user is able to access our customer portal and contact Intralinks Support. Yes, indicates that support service is unavailable to the user.<br/><span class='sub-items'><strong>Note: </strong>the disabled flag will be set to YES, if a user is deregistered in the Intralinks GUD. Clients who send an email to <a href='mailto:support@intralinks.com'>support@intralinks.com</a> will receive an Access Denied email.</span><br/></li></ul><br/><br/><li class='sub-items'><strong>Contact Record Tabs</strong></li><br/><ol><li class='sub-items'><strong>Tickets</strong> - display the contacts history of engagement with our support team.<br/><br/><span class='sub-items'>From this view, Intralinks Admins may access, review and edit tickets, as well as export a ticket list by clicking Options, Export, selecting the output type and create a new ticket by clicking Add New.</span><br/></li><li class='sub-items'><strong>Implementations</strong> - will display all implementation records where the client is listed as the primary contact.</li><li class='sub-items'><strong>Tasks tab</strong> - will display all of the Implementation tasks associated with the contact.</li><li class='sub-items'><strong>Surveys</strong> - will display all responses by the contact. Intralinks Admin’s may click the View Results link to see the contact’s survey answers and comments.</li><li class='sub-items'><strong>Marketing activity</strong> - will show all emails sent to the contact from Right Now. These emails include the scheduled and unscheduled system notifications, product update emails and surveys. Intralinks Admins may see the content of the email by clicking on the document hyperlink.</li><li class='sub-items'><strong>Attachments</strong> - will display all internal files uploaded and attached to the associated contact record.</li><li class='sub-items'><strong>Audit Log</strong> - displays the history of the contact, including edits to the contact record.</li></ol></ol></li></ol>",

    search: "<h3 id='instructions'>Instructions: Quick Search</h3><ol><li class='line-items'>Click the drop down under Quick Search.<ul><li class='sub-items'><strong>A list of different search options are available to choose from.</strong></li><ol><li class='sub-items'>To search for a ticket, select <strong>“Incident search”</strong> from the drop down menu and enter the ticket number.</li><li class='sub-items'>To search for tickets associated to a specific exchange or workspace, Select, <strong>“Tickets – Search Workspace”</strong>, and enter a workspace name or ID.</li><li class='sub-items'>Workspaces are added to tickets manually. The search results will only produce tickets where workspaces were added.</li><li class='sub-items'>Select <strong>“Encrypted Password Search”</strong>, and enter either the workspace name, or workspace ID to locate and retrieve the encrypted archive password ticket.<br/><br/><span class='sub-items'><strong>Note: </strong>Local copies are encrypted and require a unique password to access content.</span><br/><br/></li><li class='sub-items'>If an implementation search is required, select <strong>Opportunity Search</strong> and enter the name of the implementation.</li><li class='sub-item'>If the implementation name is unknown, select <strong>Implementation Search by Workspace ID</strong>, enter either the Workspace ID, BCN number, or Exchange ID.</li></ol></ul></li></ol>"

}

// Window - Actions
window.onload = function() {
	if(getIEVersion() > 0) {
		dynamicNavigation(location.hash);
		window.onhashchange = function() {
			dynamicNavigation(location.hash);
		}
	} else {
		window.addEventListener('popstate', function(e) {
			dynamicNavigation(location.hash);
		}, false);
				
	}
	dynamicNavigation(location.hash);
	for(let i = 0; i < links.length; ++i) {
		links[i].onclick = function() {
			dynamicNavigation(this.hash);
		}
	}
	return false;
}

// Window - Browser Back and forward Action 


// Boolean Value For Animation
let boolean = true;

// Tutorial Navigation Animation
window.addEventListener('click', function(){
	animationLoop('0', '0', true);
	setTimeout(function(){
		dropdownMenu.style.display = 'none';		
	}, 300)
}, false);

tutorials.addEventListener('click', function(e){
	if(boolean) {
		dropdownMenu.style.display = 'block';
		setTimeout(function(){
		 animationLoop('600px', '1', false);
		}, 100);
	} else {
		animationLoop('0', '0', true);
		setTimeout(function(){
			dropdownMenu.style.display = 'none';		
		}, 300);
	}
}, false);

// Animation Actions
function animationLoop(maxHeight, opacity, booLean) {
	for(let i = 0; i < dropdownHeader.length; ++i) {
		dropdownHeader[i].style.opacity = opacity;
	}
	dropdownMenu.style.maxHeight = maxHeight;
	dropdownMenu.style.opacity = opacity;
	boolean = booLean;
}


// Dynamic Content Actions

function dynamicContent(content, subject) {
	setTimeout(function(){
		display.innerHTML = '<iframe id="display" src="assets/'+content+'/index.html" allow="autoplay"></iframe>';
	}, 500);
		main.innerHTML = html[content];
		title.innerText = subject + ' Tutorial';		
};



function dynamicNavigation(val) {
	switch(val) {
		case '':
			// location.hash = '';
			display.innerHTML = '<iframe id="display"></iframe>';
			main.innerHTML = html.main;
			title.innerText = 'Training';
			break;

		case '#overview':
			dynamicContent('overview', 'Overview');
			break;

		case '#ticket':
			dynamicContent('ticket', 'Creating a Ticket');
			break;

		case '#implementation':
			dynamicContent('opportunity', 'Creating an Implementation');	
			break;

		case '#closing':
			dynamicContent('closing', 'Closing a Ticket');	
			break;

		case '#responding':
			dynamicContent('responding', 'Responding to a Ticket');
			break;

		case '#contact':
			dynamicContent('contact', 'Contact Records');
			break;

		case '#search':
			dynamicContent('search', 'Quick Search');
			break;
		
		default:
			return false;
	}
};

// Checking IE Version and browser
function getIEVersion() {
  const sAgent = window.navigator.userAgent;
  const Idx = sAgent.indexOf("MSIE");

  // If IE, return version number.
  if (Idx > 0) 
    return parseInt(sAgent.substring(Idx+ 5, sAgent.indexOf(".", Idx)));

  // If IE 11 then look for Updated user agent string.
  else if (!!navigator.userAgent.match(/Trident\/7\./)) 
    return 11;

  else
    return 0; //It is not IE
}


// (function() {
// 	if(document.getElementById('display').contentDocument) {
// 		alert('There is content in the iframe');
// 	} 
// 	return false;
// });








	



