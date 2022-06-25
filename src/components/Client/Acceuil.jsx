import { Image } from 'antd';
import SideBarPrincipal from '../../layouts/SiderBarPrincipal';

function Acceuil() {

    return (

        <div>
            <SideBarPrincipal />
            <div id="content">
                <div class='main ml-1'>
                    <div class='container-fluid'>
                        <div className="row column1 " style={{ marginTop: "40px" }}>
                            <div class="col-md-12">
                                <Image.PreviewGroup>
                                    <Image width={200} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
                                    <Image
                                        width={200}
                                        src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                                    />
                                </Image.PreviewGroup>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Acceuil;