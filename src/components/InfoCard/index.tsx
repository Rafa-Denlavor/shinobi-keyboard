import styles from './InfoCard.module.scss';

function InfoCard() {
  return (
    <section className={styles.infocardWrapper}>
      <h1>Ninja Keyboard</h1>
      <p>
        Este minigame não está disponível para dispositivos móveis. Acesse de um
        computador para jogar.
      </p>
    </section>
  );
}

export default InfoCard;
