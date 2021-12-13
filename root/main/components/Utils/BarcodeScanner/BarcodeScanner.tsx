/*
 * @flow strict-local
 * Copyright (C) 2021 MetaBrainz Foundation
 *
 * This file is part of MusicBrainz, the open internet music database,
 * and is licensed under the GPL version 2, or (at your option) any
 * later version: http://www.gnu.org/licenses/gpl-2.0.txt
 */

import {BrowserMultiFormatReader, Result} from '@zxing/library';
import Webcam from 'react-webcam';
import * as React from 'react';

const BarcodeScanner = ({width, height, onUpdate}: {
    height: number,
    onUpdate: (arg0: unknown, arg1?: Result) => void,
    width: number,
}): React.ReactElement => {
    const webcamRef = React.useRef<Webcam>(null);
    const codeReader = new BrowserMultiFormatReader();

    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef?.current?.getScreenshot();
            if (imageSrc) {
                codeReader.decodeFromImage(undefined, imageSrc).then(result => {
                    onUpdate(null, result);
                }).catch((err) => {
                    onUpdate(err);
                });
            }
        },
        [codeReader, onUpdate],
    );

    React.useEffect(() => {
        setInterval(capture, 100);
    }, [capture]);

    return (
        <Webcam
            height={height}
            ref={webcamRef}
            screenshotFormat="image/png"
            videoConstraints={{
                facingMode: 'environment',
            }}
            width={width}
        />
    );
};

export default BarcodeScanner;
