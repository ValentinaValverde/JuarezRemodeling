import { Link } from 'react-scroll';
import { InfoCard, TabletInfoCard, MobileInfoCard } from './InfoCard';
import ServicecsImage from '../assets/images/services-image.png';

import IconOne from '../assets/icons/IconOne.png';
import IconTwo from '../assets/icons/IconTwo.png';
import IconThree from '../assets/icons/IconThree.png';
import IconFour from '../assets/icons/IconFour.png';

export function Services() {
  return (
    <div
      id="services"
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        marginTop: 100,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          width: 600,
        }}
      >
        <div>
          <h1 style={{ fontSize: 75 }}>Our Services</h1>
          <p style={{ lineHeight: 1.4, marginTop: -20 }}>
            Juarez Remodeling has the ability to handle any work you're looking
            for, including flooring, custom tile work, complete drywall
            upgrades, custom showers and closets, window work, comprehensive
            plumbing upgrades, kitchen remodels, and much more. <br />
            <br />
            Juarez Remodeling promises a total service guarantee. If any issues
            arise, we will address and resolve them until we achieve the perfect
            installation. <br />
            <br />
            <b>
              Contact us to schedule your free on-site consultation and receive
              an estimate for services.
            </b>
          </p>

          <Link to="contact" smooth={true} duration={900}>
            <button className="tirtiary-button">
              Free on-site consultation
            </button>
          </Link>
        </div>
        <div style={{ alignSelf: 'center', marginTop: 150 }}>
          <img src={ServicecsImage} style={{ maxWidth: '100%', width: 500 }} />
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
        }}
      >
        <InfoCard
          title="Residential Remodeling"
          text="Whether you’re remodeling your home for yourself or preparing to list on the market, we have the bandwidth and expertise to build your vision. From kitchen and bath remodels to whole home renovations, we’re extremely capable of getting the job done. Our work speaks for itself!"
          icon={IconOne}
        />

        <div className="services-separator " />

        <InfoCard
          title="Commercial Remodeling"
          text="Need a commercial space or office renovated? We also excel in commercial remodeling, from upfits to entire build-outs. Our commercial remodel services are available to properties of all types and sizes in Myrtle Beach, SC and the surrounding Horry County area."
          icon={IconTwo}
        />

        <div className="services-separator " />

        <InfoCard
          title="Painting and Drywall"
          text="Enhance and protect your home with our expert painting and drywall services. Whether your drywall has water damage, scratches, or holes, our skilled team is here to help. We thoroughly assess the damage and handle all necessary repairs, including crack filling and patching. Using top-quality materials and meticulous attention to detail, we ensure the result is as good as new."
          icon={IconThree}
        />

        <div className="services-separator " />

        <InfoCard
          title="Floor Installation"
          text="Choose from a variety of flooring options. Whether it’s hardwood, tile, or carpet, we install it all with an eye for detail to ensure lasting beauty in your home."
          icon={IconFour}
        />
      </div>
    </div>
  );
}

export function TabletServices() {
  return (
    <div
      id="services"
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        marginTop: 100,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          width: 600,
        }}
      >
        <div>
          <h1 style={{ fontSize: 75 }}>Our Services</h1>
          <p style={{ lineHeight: 1.4, marginTop: -20 }}>
            Juarez Remodeling has the ability to handle any work you're looking
            for, including flooring, custom tile work, complete drywall
            upgrades, custom showers and closets, window work, comprehensive
            plumbing upgrades, kitchen remodels, and much more. <br />
            <br />
            Juarez Remodeling promises a total service guarantee. If any issues
            arise, we will address and resolve them until we achieve the perfect
            installation. <br />
            <br />
            <b>
              Contact us to schedule your free on-site consultation and receive
              an estimate for services.
            </b>
          </p>

          <Link to="contact" smooth={true} duration={900}>
            <button className="tirtiary-button">
              Free on-site consultation
            </button>
          </Link>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '90%',
          marginTop: 100,
        }}
      >
        <TabletInfoCard
          title="Residential Remodeling"
          text="Whether you’re remodeling your home for yourself or preparing to list on the market, we have the bandwidth and expertise to build your vision. From kitchen and bath remodels to whole home renovations, we’re extremely capable of getting the job done. Our work speaks for itself!"
          icon={IconOne}
        />

        <div className="tablet-services-separator" />

        <TabletInfoCard
          title="Commercial Remodeling"
          text="Need a commercial space or office renovated? We also excel in commercial remodeling, from upfits to entire build-outs. Our commercial remodel services are available to properties of all types and sizes in Myrtle Beach, SC and the surrounding Horry County area."
          icon={IconTwo}
        />

        <div className="tablet-services-separator" />

        <TabletInfoCard
          title="Painting and Drywall"
          text="Enhance and protect your home with our expert painting and drywall services. Whether your drywall has water damage, scratches, or holes, our skilled team is here to help. We thoroughly assess the damage and handle all necessary repairs, including crack filling and patching. Using top-quality materials and meticulous attention to detail, we ensure the result is as good as new."
          icon={IconThree}
        />

        <div className="tablet-services-separator" />

        <TabletInfoCard
          title="Floor Installation"
          text="Choose from a variety of flooring options. Whether it’s hardwood, tile, or carpet, we install it all with an eye for detail to ensure lasting beauty in your home."
          icon={IconFour}
        />
      </div>
    </div>
  );
}

export function MobileServices() {
  return (
    <div
      id="services"
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        marginTop: 100,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          width: 600,
        }}
      >
        <div style={{ padding: 20 }}>
          <h1 style={{ fontSize: 45 }}>Our Services</h1>
          <p style={{ lineHeight: 1.4, marginTop: -10 }}>
            Juarez Remodeling has the ability to handle any work you're looking
            for, including flooring, custom tile work, complete drywall
            upgrades, custom showers and closets, window work, comprehensive
            plumbing upgrades, kitchen remodels, and much more. <br />
            <br />
            Juarez Remodeling promises a total service guarantee. If any issues
            arise, we will address and resolve them until we achieve the perfect
            installation. <br />
            <br />
            <b>
              Contact us to schedule your free on-site consultation and receive
              an estimate for services.
            </b>
          </p>

          <Link to="contact" smooth={true} duration={900}>
            <button className="tirtiary-button">
              Free on-site consultation
            </button>
          </Link>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 50,
        }}
      >
        <MobileInfoCard
          title="Residential Remodeling"
          text="Whether you’re remodeling your home for yourself or preparing to list on the market, we have the bandwidth and expertise to build your vision. From kitchen and bath remodels to whole home renovations, we’re extremely capable of getting the job done. Our work speaks for itself!"
          icon={IconOne}
        />

        <div className="tablet-services-separator" />

        <MobileInfoCard
          title="Commercial Remodeling"
          text="Need a commercial space or office renovated? We also excel in commercial remodeling, from upfits to entire build-outs. Our commercial remodel services are available to properties of all types and sizes in Myrtle Beach, SC and the surrounding Horry County area."
          icon={IconTwo}
        />

        <div className="tablet-services-separator" />

        <MobileInfoCard
          title="Painting and Drywall"
          text="Enhance and protect your home with our expert painting and drywall services. Whether your drywall has water damage, scratches, or holes, our skilled team is here to help. We thoroughly assess the damage and handle all necessary repairs, including crack filling and patching. Using top-quality materials and meticulous attention to detail, we ensure the result is as good as new."
          icon={IconThree}
        />

        <div className="tablet-services-separator" />

        <MobileInfoCard
          title="Floor Installation"
          text="Choose from a variety of flooring options. Whether it’s hardwood, tile, or carpet, we install it all with an eye for detail to ensure lasting beauty in your home."
          icon={IconFour}
        />
      </div>
    </div>
  );
}
