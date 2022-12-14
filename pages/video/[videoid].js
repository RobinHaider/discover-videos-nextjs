import { useRouter } from 'next/router';
import Modal from 'react-modal';
import styles from '../../styles/Video.module.css';
import clsx from 'classnames';
import NavBar from '../../components/nav/navbar';

Modal.setAppElement('#__next');

const Video = () => {
  const router = useRouter();
  console.log({ router });

  const video = {
    title: 'Hi cute dog',
    publishTime: '1990-01-01',
    description:
      'A big red dog that is super cute, can he get any bigger? A big red dog that is super cute, can he get any bigger? A big red dog that is super cute, can he get any bigger? A big red dog that is super cute, can he get any bigger? A big red dog that is super cute, can he get any bigger? A big red dog that is super cute, can he get any bigger? A big red dog that is super cute, can he get any bigger? A big red dog that is super cute, can he get any bigger? A big red dog that is super cute, can he get any bigger? A big red dog that is super cute, can he get any bigger? A big red dog that is super cute, can he get any bigger? A big red dog that is super cute, can he get any bigger? A big red dog that is super cute, can he get any bigger? A big red dog that is super cute, can he get any bigger? A big red dog that is super cute, can he get any bigger?',
    channelTitle: 'Paramount Pictures',
    viewCount: 10000,
  };

  const { title, publishTime, description, channelTitle, viewCount } = video;


  return (
    <div className={styles.container}>
      <div style={{marginBottom: '10rem'}}>
        <NavBar />
      </div>
      <Modal
        isOpen={true}
        contentLabel='Watch the video'
        onRequestClose={() => router.back()}
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <iframe
          id='ytplayer'
          className={styles.videoPlayer}
          width='100%'
          height='360'
          src={`https://www.youtube.com/embed/${router.query.videoid}`}
          frameBorder='0'
        ></iframe>

        <div className={styles.modalBody}>
          <div className={styles.modalBodyContent}>
            <div className={styles.col1}>
              <p className={styles.publishTime}>{publishTime}</p>
              <p className={styles.title}>{title}</p>
              <p className={styles.description}>{description}</p>
            </div>
            <div className={styles.col2}>
              <p className={clsx(styles.subText, styles.subTextWrapper)}>
                <span className={styles.textColor}>Cast: </span>
                <span className={styles.channelTitle}>{channelTitle}</span>
              </p>
              <p className={clsx(styles.subText, styles.subTextWrapper)}>
                <span className={styles.textColor}>View Count: </span>
                <span className={styles.channelTitle}>{viewCount}</span>
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Video;
