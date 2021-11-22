import React from "react";
import '../sass/PreFooter.scss';
import PreFooterLinks from "./PreFooterLinks";

const PreFooter = () => {
    let contents = [
        [
            'LOCATE A CHARGER',
            'HOW IT WORKS',
            'PRICING',  
            'MOBILE APP',
            'RENEWABLE ENERGY',
            'GLOSSARY'
        ],
        [
            'ABOUT',
            'OUR PLAN',
            'NEWS & Updates',
            'our team',
            'careers',
            'Green city'
        ],
        [
            'contact us',
            'submissions',
            'Sign up for updates',
            'marketing opportunities'
        ],
        [
            'HOME PRODUCTS'
        ],
        [
            'COMMERCIAL SOLUTIONS'
        ]
    ]
    return(
        <div className="pre-footer">
            <div className="container__links">
                <div className="container__links__logo">
                    <img src="" alt="" />
                </div>

                {
                    contents.map(item => {
                        return <PreFooterLinks value={item} />
                    })
                }
            </div>

            <div className="pre-footer__container-socials">
                <nav className="container-socials__nav-appstore">
                    <a href="/">
                        <img src="https://www.electrifyamerica.com/img/app-store-logo.e2326c69.png" alt="" />
                    </a>

                    <a href="/">
                        <img src="https://www.electrifyamerica.com/img/google-play-badge.6851e3a3.png" alt="" />
                    </a>
                </nav>

                <nav className="container-socials__nav-socials">
                    <a href=""><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAB10lEQVRoge2bPUvDQBiAH2txdRCEqqvgB7g4Cf4Bxe6O4iyCuog6uegk2r3+BQfxC5xEcBBB0bp0cBKdRHEQqyVykEFKS+9Ckkve3DOFcJf3fcjl7t606fA8DyAPLALzwCDQhQxqQBXYB0rArxLuBA6BKSGSrTgBikp4CdhJZo6hs6yEH4BRYWKtqCjhb0HPbDtqSthLdo7hkpMko4MTlk4+YX53wBlwC7wAn23a7wKTJgGSInwOrAHXhv0+TAPZFlYrxDqw7R9Hjm3hDWArzoA2J62LuGWxLLwa1zD+jy1hNQtf2QhsS/jYUlxrk9aNQVuV43CLAqfbNLAt4SfNdj3AJTAUVmBbQ/pds91smLJYFK5rtusLO3DSi4fQ83PloXRcPRwBm8Bzw2XfNMMctFnC5oAJk5TjeIk3BtxHdO0jYNqkQ9qHtPGy5YRThNpb92ZJONAuLM3ChSCd3B1OEQNBUo1jHX4EvhrOzQCvGn0X/M1FMwpB7nIcO62RJud0f57tB8bDTMYVD9JxwtJxwtJxwtJxwtJxwtJxwtJxwtJxwtLJpPBPAvKIi1rO/64nK1SVcDlDwmUlvAecJiCZqFGOJSWs/kJUBFb8l+aSnmnlUvHdikD9D81tWGb0VpTEAAAAAElFTkSuQmCC" alt="" /></a>

                    <a href=""><img src="data:image/png;base64,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" alt="" /></a>

                    <a href=""><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAEiUlEQVRoge2aW6hVRRjHfx635aGblhXahRQruxeRkkGBlHTRSqMIIcRIKvAhDvnQTYoIDOmpl+hiF7o8lBiVSokG3bGsJMiOl0OZR8VMPGUXTh3/MfbtGFfrvtdae2/YPxj22Wdmzcx/zez5Zr5v6NChQ4cOLcwwSa3Wu5HALOA6YDIwARgODAHbgC+AlcAbwP4M9R4GDOIEt0iqSeqRtEfp2CdpkaSRCf0/W9Jy+ySYOUrS/Ca8gPGS1qcUGmRjXYyXRki6VtIKSQckvV/PCzZ8n6QhSbMqFHuepF05xdYZkDRD0lxJz0va6+U5wVOiBPdaoT8lTatA7DhJ2xsUm8QSv02/8dMDD/4uaXrJgleXLHalpOFee6O7vFVscmBV6wbeAeYUtPoGuRm4sqS6Ha8DN9rqPBN4GeipeQXGhTw0AngFmAQ8YqahKO4vUeznZsJW20A6U7cOmOdPr4cTpsd7ksYWNJXPL3kqB+mTdIJr25/SvyW8tauAb4BbCxiBqwuoIy39wHRgtyvvC/4xRQXHAa8B7wLnNNCJCwuRksxW4ApgS72kL3h9horcG9sAvABMzNGRkxoQkZa1wBQT/R++4M1Ab4YK3f52LvAdsAyY5vbmKZ89olBp/2eXDcrPwZyuwPelOSp3wmcDa4DvgcXA1JC6fX7JpyM13VEWJXhaOtrm+/EFNDoAfAR8ZtO/117IIPAMcEehEg/FLVQnh2WEHQ/nmO0ti702K44psY1NwJlhGWHT7lXgqRI7c2zJYokzsb7gBcA19r8FJY9y2fSnETzRPAnbgaeBT4AP2lTw1qgMfy/9g32OBW631K5ECvZHeF0bCwyyISrDX6XdyrmzIJPUTP428/pHWB/8EXaG+rk2F+v4MkosIWbpiQp2QWWzJq7+oOA9wL1tK/VflsVlRjnilx70DrQfztKcFtfrqA3+fPMBtRuJm6W4UIs76vUAjwGHt4HwIQvLbIsrFHeEky1izrPxEvBX8X0slLeSxJIwwmOAU4Cf7PsZwMKK/VFZcGfwT5PKxwk+CtgBHNksBRl4G7g+TfG4Kf0r8GLVPc+Bsvi4k+LDY+wwPboJQtLizu53py2cJiB+kwWfWxHnWj43y+4wbkrXcTuXRS0q+M6sW+E0gh2PAvcUHFtqlCeBVVnryHrH42Lg2QojB1F8bH7wwawP5rnUMsxs8V3WaNVmqw+4tB4rykqjt3hqthNzC9uDGSIPeXEiL/NjRVlJ+xuOEzzb7GDZYvuDgbE81HI+58TdACzJGUzLymb7GfU1WlHWEXaR9NvMjbK8IrFr7TfbsFhSjrCLCV9uI+rSqCIaTsEB4HHgoSLNYc0i+pMs+CXz+DmR44GzKhrFIJss2PZh4TVL6rLbdzsrvncRxn5JD6S4Tpg7+Q92S1ooaXeThC4u8NJMZAqzw+5e0y12Apla+JQ6lI22c3NOw30lt3WQpI3HqXaBbIatlI36ttxC9BWwAnjT/q6ULDstd43gEuAi4AJb1NxlthNtofM3HgPmGtph5uRb4GuLXw1ULbJDhw4d2hPgHwewOxoI+L0uAAAAAElFTkSuQmCC" alt="" /></a>

                    <a href=""><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAACTElEQVRoge2bP2hTQRjAf43FinUQFBzEpbWTk1OhuJVAFYNzB6E4OAoqdKsBC6U4OHRP6dCxm0IL7SgupXYxIlRnBwcVUWmaGPnsdajm5e69vLRfv9wPQkju7t334+7euz+8vmazCdAPPADuASPAaWxQA3aARWABqIvwKeAFcNOIZBKrQEmEHwLPdcaYO49E+C1wzZhYElUR3jU0Zn3URLipO8Z8KViSCSEKWycKB/ALKANXgQH3XXb/qyftXfonUARet0gbA9aBs5ql07bwfIIs7v9nOcTUVdK2sHTfj23Shzzpx05a4QG3AklCZmy7moXTdukrnvTLHcRyJKQVnvSk31Xs+pd4l/YgMhvAE2DYjdlh93tDuywZWvjEE6eW1onCAfR5Pq0ILVMHloFbwCW3fSzpg8BF4DowBWxlFc5y00qSOqDV9ULKfALuAJsBMcjW8hwwHZD3cCBKhL8Bo8D7lLHMAE/TFNAyhmcyyAqz7lQhGC0t3O/GbxbOAx+ACyFltbRwVlnhK7AUmtnKY+llaEZNwjInXwG+AL9dN5W9sjMBZbdDK9EyhmWd/cY9a//lFTDu2XgQPieUP4SWFi63CfYG8DjgGj9CKtIiXPSk3w+4hq8X7WdS0qX33KOpk3q/A+c8eVRNLbtR73/E1ZJ1orB1orB1orB1orB1orB1orB1fGvQVmQ5Xs3jSDaXY93Ypa0Tha1TcBtovUKt4N7r6RV2RLjSQ8KVgxe15DBqQkFA3WQNuC0t3JA3ttxxxjtjY1pcqs6tBDT+AD91mx1ClzvfAAAAAElFTkSuQmCC" alt="" /></a>

                    <a href=""><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAAAsSAAALEgHS3X78AAAG/ElEQVR4nO3d7XHbRhCH8XPG38UORFUgdWCqglgViKogSgVxKohSQcQKrHRAdSBXILoDsgJlOFlkEA1M7B0OuD3s85vRF3Esk8D+eS/AHT68vb0FwKufOPPwjADANQIA1wgAXCMAcI0AwDUCANcIAFwjAHCNAMA1AgDXCABcIwBwjQDANQIA1wgAXCMAcI0AwDUCANcIAFwjAHCNAMA1AgDXCABcIwBwjQDANQIA1wgAXCMAcI0AwDUCANcIAFwjAHDt40w//Krjd0v56XLqtbZPo7zb/J4Vf3EnPzGvba1+4FSWH5HULsqrEMKi4/fNa2cF3h9COIQQXlrHoR2cfeu1U2ErqmQAmkJeSXFfye9r+ZZFmqZ1epGQbEsGZMoArFo/FDm6PEsgtlN1t8YOwPEb/j6EsKabgkjH7tVjCOFhzNZhrAAs5I3fjvHH4c5Gvkj3uT/4GNOga0ksxY9cbqWm1rmPaM4ALKTJ+ovuDkZwJrX12JoRHCxXF2ghg5ZLzjwm8E0mVAZ3iXK0ABQ/pnYpNTe4JRgaAIofpWQJwdAAPFD8KOhSajDZkDHA5xDCV84+DLgJITylvI3UACxkWorZHlhwkIuu0YPi1C7QA8UPQ85Su0IpLcAxaa+cfRh0EXvbREoLkP1qHJBJdG2mtADHhJ1zxmDQd+XCpv/EtgBXFD8MO2+tK1GJDcBnzj6Mi6rR2AB0rbUFLImq0dgxgNkFxEDLB+3BiGkBovpWQEHqWiUAmCMCANcIAFwjAHBNfTEsZhaIGSDURDUTpG0BmP9HbVQ1y+7QcI0WAHNFCwD00QaAGSDURlWz2gBk24kLmIiqZgkA5kpVs9rrAFwDQI16rwUwCE53I0vwUDFNAKLWWDryJMfmd9mXBvb01i4BGO6LHKM/a/8gM5QlAOi3lyeYXCgfUQojNAFgBkhvJ1cgrxkfmNBbu5oAcBEs3laa318ZHxTVW7t0gcb1wPjANgIwPsYHhhGA6TA+MEgTAG6FzovxwXR6a5cWoJyH1oU0FEIAytrLhbTj+OBvzweiFAJgw042db2WZ+BiIgTAlq3MXd8xPpgG9wLZ9Mj4IIve2tWsB2AtQDf1DsQDLWXA/PN0H21WTp4nukD2MT4YEQGoB+ODEdAFSjdVF6jLQm6vuOd5zb1OnicCkK5kABpLuY5wa+C9WMUYYMZ28mzca260S0MA5mEr973ccaNdHLpA6Sx0gbowPvg/xgAjsRqABuODfzEGcIrxgUJfAFgQXz/GByfQAsA1xgDprI8BGisZC3yy8XYmd/I8fZznZwaDYB0CMD9Mg0YgAPOylm/9c+8HQosAzIP3fn4yAlA3+vkDEYA60c/PhADUZy1LJCn8DAhAPVZS+JfeD0ROBMA+FsWPSHMrBPePlLGQAe4rxZ+st3Y1LcCOeeXJ0c/PY9f3V+gC2UI/f2IEwAb6+YUQgLKa+fzfPB+EkghAOfcyyKWfX5BmFmg7209fxkoGZ39Q/KPrrV1agOksZddnblgzhCWR41vIAPeV4reHAIzrXro7v8z5Q9ZM0wV68X6QEqyku8MFxLJ6a1cTgH3lB2FK9PNt6a1dukB50M+vlPZeIPzYFxammNVbu5p9gQJ7A3W6kW99+vl29e7dRAAwZ70B0I4BeDgbaqOqWW0AmAlCbVQ1SwAwV1kDwMUw1EZVs1wHgGvaAHBLNGqjqllaALimvQ4QuBaAyqgeYBLTArA/EGqhrtWYAHBPEGqhrtWYADAVilqoa5UAYI4IAFxT12rMLFBgJgiVUD/CNvY6AI/ch3VRNRobAK4Iw7qoGo0NwBOnH8ZF1WjsGCDwvAAY9l125lBLuRfokQqAUdG1mdICLGX7D8Cai9g7FlJagON/sOHUw5hNyu06KS1AkI2gduyFAyMO0jOJXrqbuh5gLw9yAyxYp65bH7Ig5omuEAzYDJmeT+0CNRZy4YGnGqKEb7ITd/KuJUOXRO7lDbBxFqY2uPhDpjXBhABTy1L8IeOi+CYEjAkwtk2u4g+Zd4VoZobuZFoKyOkgtZU849NljG1RHmVOltYAuWxaT9/JaugsUJ+lPDxizUUzRDpIwT+MuSHD2AFoW7V+eIwQujzLtPp2qrUnUwbgvaX8rOR6wpW8TjjmrVmx9SJ9+a18wxfZdqdkAPosW/d2X0lIwrvfN6/RvSrj8G4BeruQ963XihV4H8sBGGLV8W/fB0f7WlstrZNmXeypovzRa7NbEjvXAAAq7A4N1wgAXCMAcI0AwDUCANcIAFwjAHCNAMA1AgDXCABcIwBwjQDANQIA1wgAXCMAcI0AwDUCANcIAFwjAHCNAMA1AgDXCABcIwBwjQDANQIA1wgAXCMAcI0AwDUCANcIAFwjAHCNAMA1AgC/Qgj/ABR9YlDpbsX+AAAAAElFTkSuQmCC" alt="" /></a>
                </nav>
            </div>
        </div>
    )
}


export default PreFooter;