interface Info {
  title: string;
  text: string;
  icon?: string;
}

export function InfoCard({ title, text, icon }: Info) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: 550,
        // backgroundColor: 'pink',
        marginBottom: 10,
      }}
    >
      <div style={{ marginTop: 25, marginRight: 20 }}>
        <img src={icon} style={{ width: 75 }} />
      </div>
      <div>
        <h3 style={{ marginBottom: -10 }}>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

export function TabletInfoCard({ title, text, icon }: Info) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: '80%',
        marginBottom: 10,
      }}
    >
      <div style={{ marginTop: 25, marginRight: 20 }}>
        <img src={icon} style={{ width: 75 }} />
      </div>
      <div>
        <h3 style={{ marginBottom: -10 }}>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

export function MobileInfoCard({ title, text, icon }: Info) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: '95%',
        marginBottom: 10,
      }}
    >
      <div style={{ marginTop: 25, marginRight: 20 }}>
        <img src={icon} style={{ width: 75 }} />
      </div>
      <div>
        <h3 style={{ marginBottom: -10, fontSize: 20 }}>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
