// eslint-disable-next-line no-unused-vars
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { NavLink } from 'react-router-dom';
import styles from '../style/Landing.module.css';
import service1 from '../assent/services1.jpg';

export default function Landing() {
	return (
		<div className={styles.container}>
			<div className={styles.Card}>
				<NavLink to='/service'>
					<img src={service1} alt='' className={styles.service1} />
					<h2>Servicios de Belleza y Cuidado Personal</h2>
				</NavLink>
			</div>

			<h2>Como Funciona</h2>

			<div className={styles.steps}>
				<div>
					{' '}
					<h3>Paso 1</h3>Escoge el servicio que deseas; entre belleza y cuidado
					personal
				</div>
				<div>
					{' '}
					<h3>Paso 2</h3> Agenda tu turno en los horarios y días disponibles
				</div>
				<div>
					{' '}
					<h3>Paso 3</h3> Realiza el pago a traves de nuestro servicio de pago
					seguro
				</div>
				<div>
					{' '}
					<h3>Paso 4</h3> Disfruta tu servicio en casa
				</div>
			</div>
		</div>
	);
}
