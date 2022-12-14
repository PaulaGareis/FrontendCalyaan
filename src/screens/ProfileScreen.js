// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsUser, updateUserProfile } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants';
import styles from '../style/ProfileScreen.module.css';

export default function ProfileScreen() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [sellerName, setSellerName] = useState('');
	const [sellerLogo, setSellerLogo] = useState('');
	const [sellerDescription, setSellerDescription] = useState('');

	const userSignin = useSelector(state => state.userSignin);
	const { userInfo } = userSignin;
	const userDetails = useSelector(state => state.userDetails);
	const { loading, error, user } = userDetails;
	const userUpdateProfile = useSelector(state => state.userUpdateProfile);
	const {
		success: successUpdate,
		error: errorUpdate,
		loading: loadingUpdate,
	} = userUpdateProfile;
	const dispatch = useDispatch();
	useEffect(() => {
		if (!user) {
			dispatch({ type: USER_UPDATE_PROFILE_RESET });
			dispatch(detailsUser(userInfo._id));
		} else {
			setName(user.name);
			setEmail(user.email);
			if (user.seller) {
				setSellerName(user.seller.name);
				setSellerLogo(user.seller.logo);
				setSellerDescription(user.seller.description);
			}
		}
	}, [dispatch, userInfo._id, user]);
	const submitHandler = e => {
		e.preventDefault();
		// dispatch update profile
		if (password !== confirmPassword) {
			alert('Password and Confirm Password Are Not Matched');
		} else {
			dispatch(
				updateUserProfile({
					userId: user._id,
					name,
					email,
					password,
					sellerName,
					sellerLogo,
					sellerDescription,
				})
			);
		}
	};
	console.log('info usuario pofile', userInfo);
	return (
		<div className={styles.container}>
			<div>
				<h1>Puntos Acumulados {userInfo.pointsUser} </h1>
			</div>
			<form className='form' onSubmit={submitHandler}>
				<div>
					<h1>Perfil de Usuario</h1>
				</div>
				{loading ? (
					<LoadingBox></LoadingBox>
				) : error ? (
					<MessageBox variant='danger'>{error}</MessageBox>
				) : (
					<>
						{loadingUpdate && <LoadingBox></LoadingBox>}
						{errorUpdate && (
							<MessageBox variant='danger'>{errorUpdate}</MessageBox>
						)}
						{successUpdate && (
							<MessageBox variant='success'>
								Perfil Actualizado con ??xito
							</MessageBox>
						)}
						<div>
							<label htmlFor='name'>Nombre</label>
							<input
								id='name'
								type='text'
								placeholder='Enter name'
								value={name}
								onChange={e => setName(e.target.value)}
							></input>
						</div>
						<div>
							<label htmlFor='email'>Correo Electr??nico</label>
							<input
								id='email'
								type='email'
								placeholder='Enter email'
								value={email}
								onChange={e => setEmail(e.target.value)}
							></input>
						</div>
						<div>
							<label htmlFor='password'>Contrase??a</label>
							<input
								id='password'
								type='password'
								placeholder='Enter password'
								onChange={e => setPassword(e.target.value)}
							></input>
						</div>
						<div>
							<label htmlFor='confirmPassword'>Confirmar Contrase??a</label>
							<input
								id='confirmPassword'
								type='password'
								placeholder='Enter confirm password'
								onChange={e => setConfirmPassword(e.target.value)}
							></input>
						</div>
						{user.isSeller && (
							<>
								<h1>Profesional</h1>
								<div>
									<label htmlFor='sellerName'>Nombre del Profesional</label>
									<input
										id='sellerName'
										type='text'
										placeholder='Nombre'
										value={sellerName}
										onChange={e => setSellerName(e.target.value)}
									></input>
								</div>
								<div>
									<label htmlFor='Url Foto'>Foto</label>
									<input
										id='sellerLogo'
										type='text'
										placeholder='Logo'
										value={sellerLogo}
										onChange={e => setSellerLogo(e.target.value)}
									></input>
								</div>
								<div>
									<label htmlFor='sellerDescription'>
										Descripci??n del Profesional
									</label>
									<input
										id='sellerDescription'
										type='text'
										placeholder='Ingresar descripcion del Profesional'
										value={sellerDescription}
										onChange={e => setSellerDescription(e.target.value)}
									></input>
								</div>
							</>
						)}
						<div>
							<label />
							<button className='primary' type='submit'>
								Actualizar
							</button>
						</div>
					</>
				)}
			</form>
		</div>
	);
}
