const LoginForm = ({
	handleSubmit,
	handleUsernameChange,
	handlePasswordChange,
	username,
	password }) => {
		return (
		<div className='h-screen flex bg-gray-bg1'>
			<div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
				<h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>🔐<br/>Log in to your account </h1>
	  		<form onSubmit={handleSubmit}>
					<div>
						<label htmlFor='username'>User name</label>
		  			<input
      				id='username'
							className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
							value={username}
							onChange={handleUsernameChange}
		  			/>
					</div>
					<div>
						<label htmlFor='password'>Password</label>
		  			<input
      				id='password'
      				type='password'
							className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
							value={password}
							onChange={handlePasswordChange}
						/>
	  			</div>
					<div className='flex justify-center items-center mt-6'>
						<button
							className={`bg-green-500 py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
							id='login-button'
							type="submit"
						>
							Login
						</button>
					</div>
				</form>
			</div>
		</div>
  )
}

export default LoginForm