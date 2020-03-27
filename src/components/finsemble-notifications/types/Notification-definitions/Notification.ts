import INotification from "./INotification";
import IPerformedAction from "./IPerformedAction";
import IAction from "./IAction";
import Meta from "./Meta";

export default class Notification implements INotification {
	id?: string;
	issuedAt: string;
	receivedAt?: string;
	type?: string;
	source?: string;
	title: string;
	details?: string;
	headerText?: string;
	headerLogo?: string;
	contentLogo?: string;
	timeout?: number;

	isRead: boolean;
	isSnoozed: boolean;

	actions?: IAction[];
	meta?: Meta;
	actionsHistory?: IPerformedAction[];
	stateHistory: INotification[];

	constructor() {
		this.actions = [];
		this.isRead = false;
		this.isSnoozed = false;
		this.actionsHistory = [];
		this.meta = new Meta();
		this.stateHistory = [];
	}
}