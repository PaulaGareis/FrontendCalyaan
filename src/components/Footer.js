import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ChatBox from '../components/ChatBox.js';
import styles from '../style/Footer.module.css';
import pinteres from '../assent/pinteres.png';
import youtube from '../assent/youtube.png';
import facebook from '../assent/facebook.png';
import instagram from '../assent/instagram.png';
import whatsApp from '../assent/whatsApp1.png';
import logo3 from '../assent/LOGO34.png';
import correo from '../assent/correo.png';

export default function Footer() {
	const userSignin = useSelector(state => state.userSignin);
	const { userInfo } = userSignin;
	// const goWhatsApp = () => {
	// 	window.location.replace(
	// 		'https://api.whatsapp.com/send?phone=+573127411293&text=hola'
	// 	);
	// };
	const handleClickBlog = () => {
		window.location.replace('https://calyaan.com/blog/');
	};
	const handleClickNosotros = () => {
		window.location.replace('https://calyaan.com/quienes-somos/');
	};
	const handleClickContacto = () => {
		window.location.replace('https://calyaan.com/contactanos/');
	};
	const handleClickCorporativo = () => {
		window.location.replace('https://calyaan.com/empresarial/');
	};
	const handleClickTrabaja = () => {
		window.location.replace('https://calyaan.com/colaboradores/');
	};
	const handleClickPrivacidad = () => {
		window.location.replace('https://calyaan.com/privacidad/');
	};
	const handleClickHabeas = () => {
		window.location.replace('https://calyaan.com/habeas-data/');
	};
	const handleClickProfesional = () => {
		window.location.replace('https://calyaan.com/entra-al-panel/');
	};

	const handleClickInstagram = () => {
		window.location.replace(
			'https://www.instagram.com/accounts/login/?next=/calyaancol/'
		);
	};
	const handleClickFacebook = () => {
		window.location.replace('https://www.facebook.com/Calyaan-105376747798392');
	};
	const handleClickYoutube = () => {
		window.location.replace(
			'https://www.youtube.com/channel/UCJNVxAjRm23sU7Q8ylvYxWA'
		);
	};
	const handleClickPinteres = () => {
		window.location.replace('https://co.pinterest.com/calyaancol/_created/');
	};

	return (
		<div className={styles.container}>
			<div className={styles.logo}>
				<img src={logo3} alt='Logo' />
			</div>
			<div className={styles.container1}>
				{/* <div className={styles.footer1}>
					<h2>CATEGORIAS</h2>
					<ul>
						<NavLink to='/service'>
							{' '}
							<li>Servicio en Bogota</li>
						</NavLink>
					</ul>
				</div> */}

				<div className={styles.footer2}>
					<h2>CALYAAN</h2>
					<ul>
						<NavLink to='/' onClick={handleClickNosotros}>
							<li>Nosotros</li>
						</NavLink>
						<NavLink to='/' onClick={handleClickContacto}>
							<li>Contacto</li>
						</NavLink>
						<NavLink to='/' onClick={handleClickBlog}>
							<li>Blog</li>
						</NavLink>
					</ul>
				</div>

				<div className={styles.footer3}>
					<h2>ENLACES</h2>
					<ul>
						<NavLink to='/' onClick={handleClickCorporativo}>
							<li>Servicio corporativo</li>
						</NavLink>
						<NavLink to='/' onClick={handleClickTrabaja}>
							<li>Trabaja con nosotros</li>
						</NavLink>
						<NavLink to='/' onClick={handleClickPrivacidad}>
							<li>Privacidad</li>
						</NavLink>
						<NavLink to='/' onClick={handleClickHabeas}>
							<li>Habeas data</li>
						</NavLink>
						<NavLink to='/' onClick={handleClickProfesional}>
							<li>Panel Profesionales</li>
						</NavLink>
					</ul>
				</div>

				<div className={styles.Footer5}>
					<h2>CONTÁCTANOS</h2>
					<div className={styles.imgW}>
						<img src={whatsApp} />
						<h3> (+57)3147428757</h3>
					</div>
					<div className={styles.imgW}>
						<img src={correo} />
						<h3>Calyaan.com@gmail.com</h3>
					</div>
				</div>
			</div>
			<div className={styles.footer4}>
				<h2>SÍGUENOS</h2>
				<div className={styles.btn}>
					<button onClick={handleClickInstagram}>
						<img src={instagram} />
						<h3>@Calyaancol</h3>
					</button>
					<button onClick={handleClickFacebook}>
						<img src={facebook} />
						<h3>Calyaan</h3>
					</button>
					<button onClick={handleClickYoutube}>
						<img src={youtube} />
						<h3>Calyaan</h3>
					</button>
					<button onClick={handleClickPinteres}>
						<img src={pinteres} />
						<h3>Calyaancol</h3>
					</button>
				</div>

				{/* <div className={styles.footer5}>
					<button onClick={goWhatsApp} className={styles.btnW}>
						<img src={whatsApp} className={styles.imgW} />
					</button>
				</div> */}
			</div>

			{userInfo && !userInfo.isAdmin && <ChatBox userInfo={userInfo} />}
		</div>
	);
}
