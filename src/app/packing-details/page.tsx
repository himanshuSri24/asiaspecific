import Navbar from "@/component/Navbar/Navbar";
import React from "react";
import "./style.css";
import Footer from "@/component/footer/Footer";

const PackingDetails = () => {
  return (
    <div className="packing-details-body">
      <Navbar />
      <div className="packing-details">
        <div className="z12 font-bd">Packing Details</div>
        <div className="packing-details-content">
          <div className="para">
            Below packing details are based on 27 ton capacity at the
            destination port. It may vary from port to port
          </div>
          <div className="button">
            <button className="pdf-button">Download PDF</button>
          </div>
        </div>
        <div className="packing-details-table">
          <table className="table">
            <tbody>
              <tr key={1}>
                <th>TILE SIZE</th>
                <th>CONTAINER SIZE</th>
                <th>CATEGORY</th>
                <th>AVAILABLE SURFACES</th>
                <th>THICKNESS (in mm)</th>
                <th>PCS/BOX</th>
                <th>AREA/BOX(in SQM)</th>
                <th>BOX/PALLET</th>
                <th>PALLET TYPE</th>
                <th>TOTAL PALLET/FC</th>
                <th>BOX/FCL</th>
                <th>TOTAL SQM/FCL</th>
              </tr>
              <tr key={3}>
                <td>200X1200mm (8X48)</td>
                <td>20</td>
                <td>WOODEN PROCELAIN TILES</td>
                <td>RUSTIC MAT</td>
                <td>8.5</td>
                <td>5</td>
                <td>1.2</td>
                <td>39</td>
                <td>NORMAL WOODEN PALLET</td>
                <td>26</td>
                <td>1014</td>
                <td>1216.80</td>
              </tr>
              <tr key={4}>
                <td>300X450mm (8X48)</td>
                <td>20</td>
                <td>GLAZED CERAMIC TILES</td>
                <td>GLOSS/MAT</td>
                <td>9</td>
                <td>1</td>
                <td>2.88</td>
                <td>120</td>
                <td>NORMAL WOODEN PALLET</td>
                <td>21</td>
                <td>2520</td>
                <td>2041.2</td>
              </tr>
              <tr key={5}>
                <td>300X600 mm (12X24)</td>
                <td>20</td>
                <td>GLAZED PROCELAIN Elevation</td>
                <td>GLOSS/MATT/HIGH GLOSS</td>
                <td>8.5</td>
                <td>5</td>
                <td>0.9</td>
                <td>64</td>
                <td>NORMAL WOODEN PALLET</td>
                <td>24</td>
                <td>1516</td>
                <td>1382.5</td>
              </tr>
              <tr key={6}>
                <td>600X600 mm</td>
                <td>20</td>
                <td>GLAZED CERAMIC TILES</td>
                <td>GROSS</td>
                <td>7</td>
                <td>4</td>
                <td>2.88</td>
                <td>44</td>
                <td>NORMAL WOODEN PALLET</td>
                <td>29</td>
                <td>1276</td>
                <td>1837.44</td>
              </tr>

              <tr key={7}>
                <td>600X600mm</td>
                <td>20</td>
                <td>GLAZED PROCELAIN TILES</td>
                <td>GLOSS/ MATT/HIGH GLOSS</td>
                <td>9</td>
                <td>4</td>
                <td>1.44</td>
                <td>40</td>
                <td>NORMAL WOODEN PALLET</td>
                <td>25</td>
                <td>1000</td>
                <td>1440</td>
              </tr>

              <tr key={8}>
                <td>200X1200mm (8X48)</td>
                <td>20</td>
                <td>WOODEN PROCELAIN TILES</td>
                <td>RUSTIC MAT</td>
                <td>8.5</td>
                <td>5</td>
                <td>1.2</td>
                <td>39</td>
                <td>NORMAL WOODEN PALLET</td>
                <td>26</td>
                <td>1014</td>
                <td>1216.80</td>
              </tr>

              <tr key={9}>
                <td>200X1200mm (8X48)</td>
                <td>20</td>
                <td>WOODEN PROCELAIN TILES</td>
                <td>RUSTIC MAT</td>
                <td>8.5</td>
                <td>5</td>
                <td>1.2</td>
                <td>39</td>
                <td>NORMAL WOODEN PALLET</td>
                <td>26</td>
                <td>1014</td>
                <td>1216.80</td>
              </tr>

              <tr key={10}>
                <td>600X600 mm (24X24)</td>
                <td>20</td>
                <td>FULL BODY OUTDOOR PORCELAIN TILES</td>
                <td>MATT</td>
                <td>20</td>
                <td>2</td>
                <td>0.72</td>
                <td>36</td>
                <td>NORMAL WOODEN PALLET</td>
                <td>24</td>
                <td>864</td>
                <td>622.08</td>
              </tr>

              <tr key={11}>
                <td>600X1200 mm (24X48)</td>
                <td>20</td>
                <td>GLAZED PROCELAIN TILES</td>
                <td>GLOSS/MATT/HIGH GLOSS</td>
                <td>9</td>
                <td>2</td>
                <td>1.44</td>
                <td>30</td>
                <td>EURO WOODEN PALLET</td>
                <td>30</td>
                <td>960</td>
                <td>1382.4</td>
              </tr>

              <tr key={12}>
                <td>800X800 mm (32X32)</td>
                <td>20</td>
                <td>GLAZED PROCELAIN TILES</td>
                <td>GLOSS/MATT/HIGH GLOSS</td>
                <td>9</td>
                <td>3</td>
                <td>1.92</td>
                <td>36</td>
                <td>NORMAL WOODEN PALLET</td>
                <td>20</td>
                <td>720</td>
                <td>1382.4</td>
              </tr>

              <tr key={13}>
                <td>800X1600 mm (32X64)</td>
                <td>20</td>
                <td>GLAZED PROCELAIN TILES</td>
                <td>GLOSS/MATT/HIGH GLOSS</td>
                <td>9</td>
                <td>2</td>
                <td>2.56</td>
                <td>18</td>
                <td>NORMAL WOODEN PALLET</td>
                <td>18</td>
                <td>504</td>
                <td>1290</td>
              </tr>

              <tr key={14}>
                <td>200X1200mm (8X48)</td>
                <td>20</td>
                <td>WOODEN PROCELAIN TILES</td>
                <td>RUSTIC MAT</td>
                <td>8.5</td>
                <td>5</td>
                <td>1.2</td>
                <td>39</td>
                <td>NORMAL WOODEN PALLET</td>
                <td>26</td>
                <td>1014</td>
                <td>1216.80</td>
              </tr>

              <tr key={15}>
                <td>200X1200mm (8X48)</td>
                <td>20</td>
                <td>WOODEN PROCELAIN TILES</td>
                <td>RUSTIC MAT</td>
                <td>8.5</td>
                <td>5</td>
                <td>1.2</td>
                <td>39</td>
                <td>NORMAL WOODEN PALLET</td>
                <td>26</td>
                <td>1014</td>
                <td>1216.80</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default PackingDetails;
