@state {
	value: string = ""
}
component Input(label: string) {
	return <>
		<label>{label}</label>
		<input value={value} />
	</>
}

type User = {
	name: string
	email: string
	age: int
}

@state {
	// maybe it should be more like an explicit export? We don't really need them to be states, and UserForm doesn't have ownership of the data, Input has it.
	// Also, how should we define a default value for them?
	name: string = nameInput.value
	email: string = emailInput.value
	age: int = ageInput.value
}
component UserForm(index: int) {
	return <>
		<h3>User {index + 1}</h3>
		<Input label="Name" &nameInput/>
		<Input label="Email" &emailInput/>
		<Input label="Age" &ageInput/>
	</>
}

component Summary(users: User[]) {
	let avgAge = users.length == 0 ? 0 : sum(users.map(u => u.age)) / users.length

	return <footer>
		<p>{users.length} users, average age: {}</p>
	</footer>
}

component SaveAll(users: User[]) {
	render <button onclick={() => sendToServer(users)}>Save All</button>
}

@state {
	users: User[]
}
component FormEditor() {

	fn onAddUser() => {
		users.push({"", "", 0})
	}

	return <>
		<h2>User Editor</h2>
		<button onClick={onAddUser}>Add User</button>
		{users.map((user, i) => <UserForm index={i} &userForms[i] />)} // How dow we create new elements from the data? We might need to go the ctor way.
		<Summary users={userForms} />
		<SaveAll users={userForms} />
	</>
}
