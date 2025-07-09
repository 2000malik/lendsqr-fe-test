import React from "react";
//
import { Divider, Header, Stack } from "@/src/components";
//
import {
  educationInfo,
  GuarantorInfo,
  personalInfo,
  socialsInfo,
} from "../../data";
import styles from "../styles.module.scss";
import { GeneralInfoLabel } from "../../components/general-info-label";
type Props = {
  data?: userInfo;
};
export const GeneralInfo = ({ data }: Props) => {
  return (
    <div className={styles.genInfoContainer}>
      <Stack>
        <Stack>
          <Header title="Personal Information" className={styles.header} />
          <div className={styles.contentLayout}>
            {personalInfo(data)?.map(({ label, value }) => (
              <GeneralInfoLabel key={label} label={label} value={value} />
            ))}
          </div>
        </Stack>
        <Divider />
        <Stack>
          <Header title="Education and Employment" className={styles.header} />
          <div className={styles.contentLayout}>
            {educationInfo(data)?.map(({ label, value }) => (
              <GeneralInfoLabel key={label} label={label} value={value} />
            ))}
          </div>
        </Stack>
        <Divider />
        <Stack>
          <Header title="Socials" className={styles.header} />
          <div className={styles.contentLayout}>
            {socialsInfo(data)?.map(({ label, value }) => (
              <GeneralInfoLabel key={label} label={label} value={value} />
            ))}
          </div>
        </Stack>
        <Divider />
        <Stack>
          <Header title="Guarantor" className={styles.header} />
          <div className={styles.contentLayout}>
            {GuarantorInfo(data)?.map(({ label, value }) => (
              <GeneralInfoLabel key={label} label={label} value={value} />
            ))}
          </div>
        </Stack>
      </Stack>
    </div>
  );
};
